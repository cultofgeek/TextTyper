TextTyper
=========

A basic class that will render a string one character at a time like a typewriter.

To instantiate, you need to pass in 3 arguments: 
the message that you want typed out, 
the target name, 
and the number of milliseconds you want to take between printing out each character: 

new TextTyper("the string that you want typed out", "#target_element_in_dom", 15);

To begin, the typing effect, call the "render" method.
