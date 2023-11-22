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
