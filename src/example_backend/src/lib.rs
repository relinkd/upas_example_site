use ic_cdk_macros::export_candid;
use candid::Principal;

pub mod access;
pub mod state;
pub mod storable;
pub mod logic;

use storable::*;

export_candid!();
