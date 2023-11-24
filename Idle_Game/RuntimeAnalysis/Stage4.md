# Stage 4

Usually there's more than one path in this case but as we observed, attempting to get more coins means consuming more steps. Therefore only two paths are considered, one big loop collecting four coins and multiple loops collecting one coin each.

![Stage 4](https://raw.githubusercontent.com/CHL-a/OutcoreReference/main/Idle_Game/RuntimeAnalysis/ImageBin/Stage4.png)

Path 1:
 * Initial: Red
 * Iteration: Orange

Path 2:
 * Initial: Red + Purple * 5 + Pink
 * Iteration: Purple * 4 + Pink

Mind that the initial has an extra purple iteration because the pink path hits the coin.

|Path|Coins|Steps|Rate|
|-|-|-|-|
|Red|0|4|
|Orange|4|22|2/11|
|Purple|1|8|1/8|
|Pink|1|12|1/12|
|Path 2 Iteration|5|40|1/8|
