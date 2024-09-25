use ic_cdk::update;
use crate::state::{_push_message, get_principal_to_is_posted, _set_principal_posted, _update_message};
use crate::storable::Message;
use crate::access::is_controller;

#[update(name = "writeMessage")]
pub fn write_message(content: String) -> Result<(), String> {
    let caller = ic_cdk::caller();
    
    // Check if the principal has already posted
    if get_principal_to_is_posted(caller) {
        return Err("You have already posted a message.".to_string());
    }
    
    // Create a new message
    let message = Message {
        message: content,
        author: caller,
    };
    
    // Push the message
    match _push_message(message) {
        Ok(_) => {
            // Update the principal's posting status
            _set_principal_posted(caller);
            Ok(())
        },
        Err(_) => Err("Failed to store the message.".to_string()),
    }
}

#[update(name = "removeMessage")]
pub fn remove_message(index: usize) -> Result<(), String> {
    // Check if the caller is a controller
    if !is_controller() {
        return Err("Only controllers can remove messages.".to_string());
    }
    
    // Update the message content to "message deleted"
    match _update_message(index, "message deleted".to_string()) {
        Ok(_) => Ok(()),
        Err(_) => Err("Failed to remove the message.".to_string()),
    }
}