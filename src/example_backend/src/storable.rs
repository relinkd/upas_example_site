//! This module defines storable types and their implementations for use with stable structures.

use candid::{Principal, CandidType, Deserialize, Encode, Decode};
use ic_stable_structures::memory_manager::VirtualMemory;
use ic_stable_structures::{
    storable::Bound, DefaultMemoryImpl, Storable,
};
use std::borrow::Cow;

pub type Memory = VirtualMemory<DefaultMemoryImpl>;
pub const MAX_VALUE_SIZE: u32 = 300;
pub const MAX_KEY_SIZE: u32 = 100;

#[derive(CandidType, Deserialize, Clone)]
pub struct Message {
    pub author: Principal,
    pub message: String,
}

/// A wrapper for `Principal` to make it storable.
#[derive(PartialEq, Eq, PartialOrd, Ord, Clone)]
pub struct StorablePrincipal(pub Principal);

impl Storable for StorablePrincipal {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        self.0.to_bytes()
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Self(Principal::from_bytes(bytes))
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_KEY_SIZE,
        is_fixed_size: false,
    };
}

macro_rules! impl_storable {
    ($($t:ty),*) => {
        $(
            impl Storable for $t {
                fn to_bytes(&self) -> Cow<[u8]> {
                    Cow::Owned(Encode!(self).unwrap())
                }

                fn from_bytes(bytes: Cow<[u8]>) -> Self {
                    Decode!(bytes.as_ref(), Self).unwrap()
                }

                const BOUND: Bound = Bound::Bounded {
                    max_size: MAX_VALUE_SIZE,
                    is_fixed_size: false,
                };
            }
        )*
    };
}

impl_storable!(Message);