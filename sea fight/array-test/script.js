 var scores = [60, 50, 60, 58, 54, 54,
     58, 50, 52, 54, 48, 69,
     34, 55, 51, 52, 44, 51,
     69, 64, 66, 55, 52, 61,
     46, 31, 57, 52, 44, 18,
     41, 53, 55, 61, 51, 44
 ];
 var costs = [.25, .27, .25, .25, .25, .25,
     .33, .31, .25, .29, .27, .22,
     .31, .25, .25, .33, .21, .25,
     .25, .25, .28, .25, .24, .22,
     .20, .25, .30, .25, .24, .25,
     .25, .25, .27, .25, .26, .29
 ];

 var maxScores = [];
 var maxCostValue = 100;
 var index;
 var highScore = 0;
 var amountScores = 0;

 function printAndGetHighScore(scores) {
     for (var i = 0; i < scores.length; i++) {

         var output = "Bubble solution #" + i +
             " score: " + scores[i];
         console.log(output);
         if (scores[i] > highScore) {
             highScore = scores[i];
         }
     }
     return highScore;
 }

 function getBestResults(scores) {
     for (var i = 0; i < scores.length; i++) {
         if (scores[i] == highScore) {
             maxScores.push(i)
         }
     }
     return maxScores;
 }

 function getMostCostEffectiveSolution(scores, costs, highscore) {
     var cost = 100;
     var index;
     for (var i = 0; i < scores.length; i++) {
         if (scores[i] == highscore) {
             if (cost > costs[i]) {
                 index = i;
                 cost = costs[i];
             }
         }
     }
     return index;
 }

 highScore = printAndGetHighScore(scores);
 maxScores = getBestResults(scores);
 var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

 console.log("Bubbles tests: " + scores.length);
 console.log("Highest bubble score: " + highScore);
 console.log("Solutions with the highest score: " + maxScores);
 console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");