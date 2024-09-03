use ic_stable_structures::{
    DefaultMemoryImpl, StableBTreeMap, StableVec
};
use ic_cdk::query;
use std::cell::RefCell;
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager};
use crate::storable::{
    Memory, Message, StorablePrincipal
};
use candid::Principal;

thread_local! {
    pub static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static MESSAGES: RefCell<StableVec<Message, Memory>> = RefCell::new(
        StableVec::init(
            MEMORY_MANAGER.with(|a| a.borrow().get(MemoryId::new(0))),
        ).unwrap()
    );

    pub static PRINCIPAL_TO_IS_POSTED: RefCell<StableBTreeMap<StorablePrincipal, bool, Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
        )
    );
}

#[query(name = "getPrincipalToIsPosted")]
pub fn get_principal_to_is_posted(principal: Principal) -> bool {
    if let Some(is_posted) = PRINCIPAL_TO_IS_POSTED.with(|p| p.borrow().get(&StorablePrincipal(principal))) {
        is_posted
    } else {
        false
    }
}

pub fn _push_message(message: Message) -> Result<(), ic_stable_structures::GrowFailed> {
    MESSAGES.with(|p| {
        let b_p = p.borrow_mut();
        b_p.push(&message)
    })
}

#[query(name = "getMessages")]
pub fn get_messages(start_index: u64, end_index: u64) -> Vec<Message> {
    MESSAGES.with(|messages| {
        let messages = messages.borrow();
        let length = messages.len();

        if start_index >= length {
            return Vec::new();
        }

        let end_index = std::cmp::min(end_index, length);
        
        (start_index..end_index)
            .filter_map(|i| messages.get(i).map(|m| m.clone()))
            .collect()
    })
}

pub fn _set_principal_posted(principal: Principal) {
    PRINCIPAL_TO_IS_POSTED.with(|p| {
        p.borrow_mut().insert(StorablePrincipal(principal), true);
    });
}
