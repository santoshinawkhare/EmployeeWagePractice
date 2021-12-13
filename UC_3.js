function askDefault (yes, no, theQue = "Can you answer?")
{
    if (question(theQue)) yes();
    else no();
}

function ask (theQue, ...others)
{
    if  (question(theQue)) others[0]()
    else others[1]();
}

function showOK()
{
    alert (" You Agreed.");
}

function showCancel()
{
    alert (" You Canceled the Execution.");
}

let question = function(theQue)
{
    return confirm(theQue);
};

//usage: function showOK, showCancel are passed as argument to ask
ask ("Do you agree?", showOK, showCancel);
askDefault(showOK, showCancel);