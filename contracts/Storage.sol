pragma solidity ^0.5.16;

contract Storage {
    struct message {
        string text;
        uint256 createdAt;
        address sender;
    }

    message[3] store;
    uint pntr;

    function Storage() public {
        pntr = 0;
    }

    function set(string _text) public {
        if (pntr >= 3) {
            pntr = 0;
        }
        store[pntr].text = _text;
        store[pntr].createdAt = now;
        store[pntr].sender = msg.sender;
        pntr++;
    }

    function get(uint _index) public view returns (string, uint256, address){
        return (store[_index].text, store[_index].createdAt, store[_index].sender);
    }
}
