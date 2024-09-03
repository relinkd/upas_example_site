use ic_cdk::update;
use crate::state::{_push_message, get_principal_to_is_posted, _set_principal_posted};
use crate::storable::Message;

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
