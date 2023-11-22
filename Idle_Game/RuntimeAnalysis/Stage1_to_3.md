# Stage 1
This part is pretty straight forward. Two coins and a deposit infront of the worker so the rate for this is `2c/4st` or `1c/2st`. There is no better path without putting more steps towards the goal.

# Stage 2
This part is where path starts to split.

![Stage 2](https://raw.githubusercontent.com/CHL-a/OutcoreReference/main/Idle_Game/RuntimeAnalysis/ImageBin/Stage2.png)

Red arrows represent a dedicated path, since it leads to the closest coin. The other colored arrows represent alternate paths for worker to take. Mind that changing direction consumes more steps because turning consumes a step. Thus, it should be used sparingly.

This table shows the possible routes, the prefix plus in this case combines red's path with theirs.

|Path|Coins|Steps|Rate|
|---|---|---|---|
|Red|1|6|1/6|
|Orange|1|8|1/8|
|+Orange|2|14|1/7|
|Yellow|3|12|1/4|
|+Yellow|4|18|2/9|

Because we want a bigger rate, red and orange makes the better path but yellow brings the most coins.

# Stage 3

## Part 1
For this part, we would like to go to the first coin since it is the closest and leads to the second closest coin. Because this level unlocks the left turn, it makes the three right turns obsolete since it consumes more steps than a left turn to perform a left turn. Thus, for this table, variable `a` is introduced, representing 1 or 3 steps, and occurs for every left turn.

![Stage 3 Part 1](https://raw.githubusercontent.com/CHL-a/OutcoreReference/main/Idle_Game/RuntimeAnalysis/ImageBin/Stage3Pt1.png)

|Path|Coins|Steps|Rate|
|---|---|---|---|
|Orange|0|7+a|0|
|Yellow|0|4+2a|0|

In this case, yellow is more shorter if the worker bought the left turn but both paths are as efficient if the player didn't buy at all, regardless yellow and left turn is the shortest path by 3 steps.

## Part 2
This part encompasses all the possibilities, uses the same rules as stated in Stage 2.

![Stage 3 Part 2](https://raw.githubusercontent.com/CHL-a/OutcoreReference/main/Idle_Game/RuntimeAnalysis/ImageBin/Stage3Pt2.png)

|Path|Coins|Steps|Rate|
|---|---|---|---|
|Red|1|7|1/7|
|Orange|1|3|1/3|
|+Orange|2|10|1/5|
|Yellow|1|a+12|1/(a+12)|
|+Yellow|2|a+12|2/(a+12)|
