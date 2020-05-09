# Project Post Mortem
## Approach and Process
### What in my process and approach to this project would I do differently next time?
In next projects, if I have a chance to build a game in which there are many levels, I will create all levels automaticly, instead of hard code each level.

### What in my process and approach to this project went well that I would repeat next time?
 Next time, I would complete all main functions, main details of project before designing, and adding effects.

## Code and Code Design
### What in my code and program design in the project would I do differently next time?
In the code, there are some code blocks I wrote unreadeable, there is loop in loop, and some functions are not seperated, they effect each other. When I fix one of them, I need to fix the other ones.
    ex: 
```
activateNextLevel: () => {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (localStorage.getItem(key) === 'true') {
                    const $level = $('.list-level');
                    for (let i = 0; i < $level.length; i++) {
                        if ($level.eq(i).children().eq(0).html() === key) {
                            $level.eq(i).css('opacity', '1');
                        }
                    }
                }
            }
        }
```
### What in my code and program design in the project went well? Is there anything I would do the same next time?
In my code, I divided them into many objects, each object is a mode of my game.
In side each object, I divided all functions into 3 kinds of function: 
   - App (game logic)
   - UI
   - Eventhandler

## Unit 1 Post Mortem
### What habits did I use during this unit that helped me?
I usually use console.log() to check if a function works correctly or not.
### What habits did I have during this unit that I can improve on?
I would commit frequently, or whenever I complete a function and the code works well, I would commit immediately.
### How is the overall level of the course during this unit? (instruction, course materials, etc.)
I think this unit is difficult but I am still able to follow.
