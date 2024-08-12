export type Issuer = {
    verified: boolean;
    description: String;
    issuer_type: String;
    name: String;
    reputation_module: String;
  } 
export type Principal = {
    _arr: Uint8Array[];
    _isPrincipal: boolean; 
}
  
export type IssuerTuple = [Principal, Issuer];
  