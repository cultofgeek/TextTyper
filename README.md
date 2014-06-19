TextTyper
=========

A basic class that will render a string one character at a time like a typewriter.

To instantiate, you need to pass in 3 arguments: 

new TextTyper([str], [target], [speed]);

str = the string that you want typed out
target = the dom selector that you are targeting for the string output
speed = the number of milliseconds you want the type animation to take between each character

To begin, the typing effect, call the "render" method.
