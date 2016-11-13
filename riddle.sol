pragma solidity ^0.4.2;
contract Riddle {

    event Print(string);
    event PrintInteger(uint);

    string question;
    string answer;

    function Riddle(string _question, string _answer) public
    {
        question = _question;
        answer = _answer;
    }

    function set_question(string _question, string _answer) returns (bool)
    {
        if(stringsEqual(question, ""))
        {
            question = _question;
            answer = _answer;
            Print("New question was set.");
            return true;
        }
        else
        {
            Print("No new question set, there already is one.");
            return false;
        }
    }

    function check_answer(string _answer) payable returns (bool)
    {
        if(msg.value < 1)
        {
            Print("Sorry, you didn't pay enough!");
            return false;
        }

        if(stringsEqual(answer, _answer))
        {
            // pay out
            if(!msg.sender.send(this.balance))
                throw;

            // reset question and answer
            question = "";
            answer = "";

            Print("Correct! You won. Check your wallet :)");
            return true;
        }
        else
        {
            Print("Sorry, wrong answer!");
            return false;
        }

    }



    function get_question() returns (string)
    {
        Print(question);
        return question;
    }


    function get_reward() returns (uint)
    {
        PrintInteger(this.balance);
        return this.balance;
    }


    function stringsEqual(string storage _a, string memory _b) internal
    returns (bool)
    {
        bytes storage a = bytes(_a);
        bytes memory b = bytes(_b);

        if (a.length != b.length)
            return false;
        // @todo unroll this loop
        for (uint i = 0; i < a.length; i ++)
            if (a[i] != b[i])

        return false;
        return true;
    }
}