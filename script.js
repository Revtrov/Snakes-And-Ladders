//all the variables
var pos1 = 1;
var pos2 = 1;
numcount6 = 0;
numcount1 = 0;
numcount2 = 0;
numcount3 = 0;
numcount4 = 0;
numcount5 = 0;
numcount6 = 0;
count = 0;
var a = 0;
var order = 1;
//makes the red counter visible at the start
document.getElementById("counter1a").style.opacity = "100%";
document.getElementById("counter1b").style.opacity = "100%";
//the function that runs on the press of the player one button
function player1() {
    //runs only if order is less than or equal to one, this is so that only one player can go at a time
    if (order <= 1) {
        order++;
        count++;
        document.getElementById("counter1a").style.opacity = "0%";
        document.getElementById("counter2a").style.opacity = "0%";
        document.getElementById("counter3a").style.opacity = "0%";
        document.getElementById("counter4a").style.opacity = "0%";
        document.getElementById("counter5a").style.opacity = "0%";
        document.getElementById("counter6a").style.opacity = "0%";
        document.getElementById("counter7a").style.opacity = "0%";
        document.getElementById("counter8a").style.opacity = "0%";
        document.getElementById("counter9a").style.opacity = "0%";
        document.getElementById("counter10a").style.opacity = "0%";
        document.getElementById("counter11a").style.opacity = "0%";
        document.getElementById("counter12a").style.opacity = "0%";
        document.getElementById("counter13a").style.opacity = "0%";
        document.getElementById("counter14a").style.opacity = "0%";
        document.getElementById("counter15a").style.opacity = "0%";
        document.getElementById("counter16a").style.opacity = "0%";
        document.getElementById("counter17a").style.opacity = "0%";
        document.getElementById("counter18a").style.opacity = "0%";
        document.getElementById("counter19a").style.opacity = "0%";
        document.getElementById("counter20a").style.opacity = "0%";
        document.getElementById("counter21a").style.opacity = "0%";
        document.getElementById("counter22a").style.opacity = "0%";
        document.getElementById("counter23a").style.opacity = "0%";
        document.getElementById("counter24a").style.opacity = "0%";
        document.getElementById("counter25a").style.opacity = "0%";
        document.getElementById("counter26a").style.opacity = "0%";
        document.getElementById("counter27a").style.opacity = "0%";
        document.getElementById("counter28a").style.opacity = "0%";
        document.getElementById("counter29a").style.opacity = "0%";
        document.getElementById("counter30a").style.opacity = "0%";
        document.getElementById("counter31a").style.opacity = "0%";
        document.getElementById("counter32a").style.opacity = "0%";
        document.getElementById("counter33a").style.opacity = "0%";
        document.getElementById("counter34a").style.opacity = "0%";
        document.getElementById("counter35a").style.opacity = "0%";
        document.getElementById("counter36a").style.opacity = "0%";
        document.getElementById("counter37a").style.opacity = "0%";
        document.getElementById("counter38a").style.opacity = "0%";
        document.getElementById("counter39a").style.opacity = "0%";
        document.getElementById("counter40a").style.opacity = "0%";
        document.getElementById("counter41a").style.opacity = "0%";
        document.getElementById("counter42a").style.opacity = "0%";
        document.getElementById("counter43a").style.opacity = "0%";
        document.getElementById("counter44a").style.opacity = "0%";
        document.getElementById("counter45a").style.opacity = "0%";
        document.getElementById("counter46a").style.opacity = "0%";
        document.getElementById("counter47a").style.opacity = "0%";
        document.getElementById("counter48a").style.opacity = "0%";
        document.getElementById("counter49a").style.opacity = "0%";
        document.getElementById("counter50a").style.opacity = "0%";
        document.getElementById("counter51a").style.opacity = "0%";
        document.getElementById("counter52a").style.opacity = "0%";
        document.getElementById("counter53a").style.opacity = "0%";
        document.getElementById("counter54a").style.opacity = "0%";
        document.getElementById("counter55a").style.opacity = "0%";
        document.getElementById("counter56a").style.opacity = "0%";
        document.getElementById("counter57a").style.opacity = "0%";
        document.getElementById("counter58a").style.opacity = "0%";
        document.getElementById("counter59a").style.opacity = "0%";
        document.getElementById("counter60a").style.opacity = "0%";
        document.getElementById("counter61a").style.opacity = "0%";
        document.getElementById("counter62a").style.opacity = "0%";
        document.getElementById("counter63a").style.opacity = "0%";
        document.getElementById("counter64a").style.opacity = "0%";
        document.getElementById("counter65a").style.opacity = "0%";
        document.getElementById("counter66a").style.opacity = "0%";
        document.getElementById("counter67a").style.opacity = "0%";
        document.getElementById("counter68a").style.opacity = "0%";
        document.getElementById("counter69a").style.opacity = "0%";
        document.getElementById("counter70a").style.opacity = "0%";
        document.getElementById("counter71a").style.opacity = "0%";
        document.getElementById("counter72a").style.opacity = "0%";
        document.getElementById("counter73a").style.opacity = "0%";
        document.getElementById("counter74a").style.opacity = "0%";
        document.getElementById("counter75a").style.opacity = "0%";
        document.getElementById("counter76a").style.opacity = "0%";
        document.getElementById("counter77a").style.opacity = "0%";
        document.getElementById("counter78a").style.opacity = "0%";
        document.getElementById("counter79a").style.opacity = "0%";
        document.getElementById("counter80a").style.opacity = "0%";
        document.getElementById("counter81a").style.opacity = "0%";
        document.getElementById("counter82a").style.opacity = "0%";
        document.getElementById("counter83a").style.opacity = "0%";
        document.getElementById("counter84a").style.opacity = "0%";
        document.getElementById("counter85a").style.opacity = "0%";
        document.getElementById("counter86a").style.opacity = "0%";
        document.getElementById("counter87a").style.opacity = "0%";
        document.getElementById("counter88a").style.opacity = "0%";
        document.getElementById("counter89a").style.opacity = "0%";
        document.getElementById("counter90a").style.opacity = "0%";
        document.getElementById("counter91a").style.opacity = "0%";
        document.getElementById("counter92a").style.opacity = "0%";
        document.getElementById("counter93a").style.opacity = "0%";
        document.getElementById("counter94a").style.opacity = "0%";
        document.getElementById("counter95a").style.opacity = "0%";
        document.getElementById("counter96a").style.opacity = "0%";
        document.getElementById("counter97a").style.opacity = "0%";
        document.getElementById("counter98a").style.opacity = "0%";
        document.getElementById("counter99a").style.opacity = "0%";
        document.getElementById("counter100a").style.opacity = "0%";
        //what makes the dice generate a randum side
        var rannum = Math.floor(Math.random() * 6) + 1;
        //makes the number above appear asdot on the dice
        if (rannum == 1) {
            numcount1++;
            pos1++;
            document.getElementById("bottomleft").style.opacity = 0;
            document.getElementById("topright").style.opacity = 0;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("bottomleft").style.opacity = 0;
            document.getElementById("topright").style.opacity = 0;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("message").innerHTML = "you moved 1 space";
        } else if (rannum == 2) {
            numcount2++;
            pos1++;
            pos1++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 0;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("message").innerHTML = "you moved 2 spaces";
        } else if (rannum == 3) {
            numcount3++;
            pos1++;
            pos1++;
            pos1++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("message").innerHTML = "you moved 3 spaces";
        } else if (rannum == 4) {
            numcount4++;
            pos1++;
            pos1++;
            pos1++;
            pos1++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("message").innerHTML = "you moved 4 spaces";
        } else if (rannum == 5) {
            numcount5++;
            pos1++;
            pos1++;
            pos1++;
            pos1++;
            pos1++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("message").innerHTML = "you moved 5 spaces";
        } else if (rannum == 6) {
            numcount6++;
            pos1++;
            pos1++;
            pos1++;
            pos1++;
            pos1++;
            pos1++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 1;
            document.getElementById("middleright").style.opacity = 1;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 1;
            document.getElementById("middleright").style.opacity = 1;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("message").innerHTML = "you moved 6 spaces";
        }
        //code for making the players appear in th squares when they are in them
        //also below is the code that makes players descend when they land on 
        //snake squares and ascend when they land on a ladder square
        if (pos1 == 1) {
            document.getElementById("counter1a").style.opacity = "100%";
        } else if (pos1 == 2) {
            document.getElementById("counter2a").style.opacity = "100%";
        } else if (pos1 == 3) {
            document.getElementById("counter3a").style.opacity = "100%";
        } else if (pos1 == 4) {
            document.getElementById("counter4a").style.opacity = "100%";
        } else if (pos1 == 5) {
            document.getElementById("counter5a").style.opacity = "100%";
        } else if (pos1 == 6) {
            document.getElementById("counter6a").style.opacity = "100%";
        } else if (pos1 == 7) {
            document.getElementById("counter7a").style.opacity = "100%";
        } else if (pos1 == 8) {
            document.getElementById("counter8a").style.opacity = "100%";
        } else if (pos1 == 9) {
            document.getElementById("counter9a").style.opacity = "100%";
            pos1 = 12;
            document.getElementById("counter1a").style.opacity = "0%";
            document.getElementById("counter2a").style.opacity = "0%";
            document.getElementById("counter3a").style.opacity = "0%";
            document.getElementById("counter4a").style.opacity = "0%";
            document.getElementById("counter5a").style.opacity = "0%";
            document.getElementById("counter6a").style.opacity = "0%";
            document.getElementById("counter7a").style.opacity = "0%";
            document.getElementById("counter8a").style.opacity = "0%";
            document.getElementById("counter9a").style.opacity = "0%";
            document.getElementById("counter10a").style.opacity = "0%";
            document.getElementById("counter11a").style.opacity = "0%";
            document.getElementById("counter12a").style.opacity = "100%";
            document.getElementById("counter13a").style.opacity = "0%";
            document.getElementById("counter14a").style.opacity = "0%";
            document.getElementById("counter15a").style.opacity = "0%";
            document.getElementById("counter16a").style.opacity = "0%";
            document.getElementById("counter17a").style.opacity = "0%";
            document.getElementById("counter18a").style.opacity = "0%";
            document.getElementById("counter19a").style.opacity = "0%";
            document.getElementById("counter20a").style.opacity = "0%";
            document.getElementById("counter21a").style.opacity = "0%";
            document.getElementById("counter22a").style.opacity = "0%";
            document.getElementById("counter23a").style.opacity = "0%";
            document.getElementById("counter24a").style.opacity = "0%";
            document.getElementById("counter25a").style.opacity = "0%";
            document.getElementById("counter26a").style.opacity = "0%";
            document.getElementById("counter27a").style.opacity = "0%";
            document.getElementById("counter28a").style.opacity = "0%";
            document.getElementById("counter29a").style.opacity = "0%";
            document.getElementById("counter30a").style.opacity = "0%";
            document.getElementById("counter31a").style.opacity = "0%";
            document.getElementById("counter32a").style.opacity = "0%";
            document.getElementById("counter33a").style.opacity = "0%";
            document.getElementById("counter34a").style.opacity = "0%";
            document.getElementById("counter35a").style.opacity = "0%";
            document.getElementById("counter36a").style.opacity = "0%";
            document.getElementById("counter37a").style.opacity = "0%";
            document.getElementById("counter38a").style.opacity = "0%";
            document.getElementById("counter39a").style.opacity = "0%";
            document.getElementById("counter40a").style.opacity = "0%";
            document.getElementById("counter41a").style.opacity = "0%";
            document.getElementById("counter42a").style.opacity = "0%";
            document.getElementById("counter43a").style.opacity = "0%";
            document.getElementById("counter44a").style.opacity = "0%";
            document.getElementById("counter45a").style.opacity = "0%";
            document.getElementById("counter46a").style.opacity = "0%";
            document.getElementById("counter47a").style.opacity = "0%";
            document.getElementById("counter48a").style.opacity = "0%";
            document.getElementById("counter49a").style.opacity = "0%";
            document.getElementById("counter50a").style.opacity = "0%";
            document.getElementById("counter51a").style.opacity = "0%";
            document.getElementById("counter52a").style.opacity = "0%";
            document.getElementById("counter53a").style.opacity = "0%";
            document.getElementById("counter54a").style.opacity = "0%";
            document.getElementById("counter55a").style.opacity = "0%";
            document.getElementById("counter56a").style.opacity = "0%";
            document.getElementById("counter57a").style.opacity = "0%";
            document.getElementById("counter58a").style.opacity = "0%";
            document.getElementById("counter59a").style.opacity = "0%";
            document.getElementById("counter60a").style.opacity = "0%";
            document.getElementById("counter61a").style.opacity = "0%";
            document.getElementById("counter62a").style.opacity = "0%";
            document.getElementById("counter63a").style.opacity = "0%";
            document.getElementById("counter64a").style.opacity = "0%";
            document.getElementById("counter65a").style.opacity = "0%";
            document.getElementById("counter66a").style.opacity = "0%";
            document.getElementById("counter67a").style.opacity = "0%";
            document.getElementById("counter68a").style.opacity = "0%";
            document.getElementById("counter69a").style.opacity = "0%";
            document.getElementById("counter70a").style.opacity = "0%";
            document.getElementById("counter71a").style.opacity = "0%";
            document.getElementById("counter72a").style.opacity = "0%";
            document.getElementById("counter73a").style.opacity = "0%";
            document.getElementById("counter74a").style.opacity = "0%";
            document.getElementById("counter75a").style.opacity = "0%";
            document.getElementById("counter76a").style.opacity = "0%";
            document.getElementById("counter77a").style.opacity = "0%";
            document.getElementById("counter78a").style.opacity = "0%";
            document.getElementById("counter79a").style.opacity = "0%";
            document.getElementById("counter80a").style.opacity = "0%";
            document.getElementById("counter81a").style.opacity = "0%";
            document.getElementById("counter82a").style.opacity = "0%";
            document.getElementById("counter83a").style.opacity = "0%";
            document.getElementById("counter84a").style.opacity = "0%";
            document.getElementById("counter85a").style.opacity = "0%";
            document.getElementById("counter86a").style.opacity = "0%";
            document.getElementById("counter87a").style.opacity = "0%";
            document.getElementById("counter88a").style.opacity = "0%";
            document.getElementById("counter89a").style.opacity = "0%";
            document.getElementById("counter90a").style.opacity = "0%";
            document.getElementById("counter91a").style.opacity = "0%";
            document.getElementById("counter92a").style.opacity = "0%";
            document.getElementById("counter93a").style.opacity = "0%";
            document.getElementById("counter94a").style.opacity = "0%";
            document.getElementById("counter95a").style.opacity = "0%";
            document.getElementById("counter96a").style.opacity = "0%";
            document.getElementById("counter97a").style.opacity = "0%";
            document.getElementById("counter98a").style.opacity = "0%";
            document.getElementById("counter99a").style.opacity = "0%";
            document.getElementById("counter100a").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went up a ladder!";
        } else if (pos1 == 10) {
            document.getElementById("counter10a").style.opacity = "100%";
        } else if (pos1 == 11) {
            document.getElementById("counter11a").style.opacity = "100%";
        } else if (pos1 == 12) {
            document.getElementById("counter12a").style.opacity = "100%";
        } else if (pos1 == 13) {
            document.getElementById("counter13a").style.opacity = "100%";
        } else if (pos1 == 14) {
            document.getElementById("counter14a").style.opacity = "100%";
        } else if (pos1 == 15) {
            document.getElementById("counter15a").style.opacity = "100%";
        } else if (pos1 == 16) {
            document.getElementById("counter16a").style.opacity = "100%";
            pos1 = 2;
            document.getElementById("counter1a").style.opacity = "0%";
            document.getElementById("counter2a").style.opacity = "100%";
            document.getElementById("counter3a").style.opacity = "0%";
            document.getElementById("counter4a").style.opacity = "0%";
            document.getElementById("counter5a").style.opacity = "0%";
            document.getElementById("counter6a").style.opacity = "0%";
            document.getElementById("counter7a").style.opacity = "0%";
            document.getElementById("counter8a").style.opacity = "0%";
            document.getElementById("counter9a").style.opacity = "0%";
            document.getElementById("counter10a").style.opacity = "0%";
            document.getElementById("counter11a").style.opacity = "0%";
            document.getElementById("counter12a").style.opacity = "0%";
            document.getElementById("counter13a").style.opacity = "0%";
            document.getElementById("counter14a").style.opacity = "0%";
            document.getElementById("counter15a").style.opacity = "0%";
            document.getElementById("counter16a").style.opacity = "0%";
            document.getElementById("counter17a").style.opacity = "0%";
            document.getElementById("counter18a").style.opacity = "0%";
            document.getElementById("counter19a").style.opacity = "0%";
            document.getElementById("counter20a").style.opacity = "0%";
            document.getElementById("counter21a").style.opacity = "0%";
            document.getElementById("counter22a").style.opacity = "0%";
            document.getElementById("counter23a").style.opacity = "0%";
            document.getElementById("counter24a").style.opacity = "0%";
            document.getElementById("counter25a").style.opacity = "0%";
            document.getElementById("counter26a").style.opacity = "0%";
            document.getElementById("counter27a").style.opacity = "0%";
            document.getElementById("counter28a").style.opacity = "0%";
            document.getElementById("counter29a").style.opacity = "0%";
            document.getElementById("counter30a").style.opacity = "0%";
            document.getElementById("counter31a").style.opacity = "0%";
            document.getElementById("counter32a").style.opacity = "0%";
            document.getElementById("counter33a").style.opacity = "0%";
            document.getElementById("counter34a").style.opacity = "0%";
            document.getElementById("counter35a").style.opacity = "0%";
            document.getElementById("counter36a").style.opacity = "0%";
            document.getElementById("counter37a").style.opacity = "0%";
            document.getElementById("counter38a").style.opacity = "0%";
            document.getElementById("counter39a").style.opacity = "0%";
            document.getElementById("counter40a").style.opacity = "0%";
            document.getElementById("counter41a").style.opacity = "0%";
            document.getElementById("counter42a").style.opacity = "0%";
            document.getElementById("counter43a").style.opacity = "0%";
            document.getElementById("counter44a").style.opacity = "0%";
            document.getElementById("counter45a").style.opacity = "0%";
            document.getElementById("counter46a").style.opacity = "0%";
            document.getElementById("counter47a").style.opacity = "0%";
            document.getElementById("counter48a").style.opacity = "0%";
            document.getElementById("counter49a").style.opacity = "0%";
            document.getElementById("counter50a").style.opacity = "0%";
            document.getElementById("counter51a").style.opacity = "0%";
            document.getElementById("counter52a").style.opacity = "0%";
            document.getElementById("counter53a").style.opacity = "0%";
            document.getElementById("counter54a").style.opacity = "0%";
            document.getElementById("counter55a").style.opacity = "0%";
            document.getElementById("counter56a").style.opacity = "0%";
            document.getElementById("counter57a").style.opacity = "0%";
            document.getElementById("counter58a").style.opacity = "0%";
            document.getElementById("counter59a").style.opacity = "0%";
            document.getElementById("counter60a").style.opacity = "0%";
            document.getElementById("counter61a").style.opacity = "0%";
            document.getElementById("counter62a").style.opacity = "0%";
            document.getElementById("counter63a").style.opacity = "0%";
            document.getElementById("counter64a").style.opacity = "0%";
            document.getElementById("counter65a").style.opacity = "0%";
            document.getElementById("counter66a").style.opacity = "0%";
            document.getElementById("counter67a").style.opacity = "0%";
            document.getElementById("counter68a").style.opacity = "0%";
            document.getElementById("counter69a").style.opacity = "0%";
            document.getElementById("counter70a").style.opacity = "0%";
            document.getElementById("counter71a").style.opacity = "0%";
            document.getElementById("counter72a").style.opacity = "0%";
            document.getElementById("counter73a").style.opacity = "0%";
            document.getElementById("counter74a").style.opacity = "0%";
            document.getElementById("counter75a").style.opacity = "0%";
            document.getElementById("counter76a").style.opacity = "0%";
            document.getElementById("counter77a").style.opacity = "0%";
            document.getElementById("counter78a").style.opacity = "0%";
            document.getElementById("counter79a").style.opacity = "0%";
            document.getElementById("counter80a").style.opacity = "0%";
            document.getElementById("counter81a").style.opacity = "0%";
            document.getElementById("counter82a").style.opacity = "0%";
            document.getElementById("counter83a").style.opacity = "0%";
            document.getElementById("counter84a").style.opacity = "0%";
            document.getElementById("counter85a").style.opacity = "0%";
            document.getElementById("counter86a").style.opacity = "0%";
            document.getElementById("counter87a").style.opacity = "0%";
            document.getElementById("counter88a").style.opacity = "0%";
            document.getElementById("counter89a").style.opacity = "0%";
            document.getElementById("counter90a").style.opacity = "0%";
            document.getElementById("counter91a").style.opacity = "0%";
            document.getElementById("counter92a").style.opacity = "0%";
            document.getElementById("counter93a").style.opacity = "0%";
            document.getElementById("counter94a").style.opacity = "0%";
            document.getElementById("counter95a").style.opacity = "0%";
            document.getElementById("counter96a").style.opacity = "0%";
            document.getElementById("counter97a").style.opacity = "0%";
            document.getElementById("counter98a").style.opacity = "0%";
            document.getElementById("counter99a").style.opacity = "0%";
            document.getElementById("counter100a").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went down a snake!";
        } else if (pos1 == 17) {
            document.getElementById("counter17a").style.opacity = "100%";
        } else if (pos1 == 18) {
            document.getElementById("counter18a").style.opacity = "100%";
        } else if (pos1 == 19) {
            document.getElementById("counter19a").style.opacity = "100%";
        } else if (pos1 == 20) {
            document.getElementById("counter20a").style.opacity = "100%";
        } else if (pos1 == 21) {
            document.getElementById("counter21a").style.opacity = "100%";
        } else if (pos1 == 22) {
            document.getElementById("counter22a").style.opacity = "100%";
        } else if (pos1 == 23) {
            document.getElementById("counter23a").style.opacity = "100%";
        } else if (pos1 == 24) {
            document.getElementById("counter24a").style.opacity = "100%";
        } else if (pos1 == 25) {
            document.getElementById("counter25a").style.opacity = "100%";
        } else if (pos1 == 26) {
            document.getElementById("counter26a").style.opacity = "100%";
        } else if (pos1 == 27) {
            document.getElementById("counter27a").style.opacity = "100%";
        } else if (pos1 == 28) {
            document.getElementById("counter28a").style.opacity = "100%";
        } else if (pos1 == 29) {
            document.getElementById("counter29a").style.opacity = "100%";
        } else if (pos1 == 30) {
            document.getElementById("counter30a").style.opacity = "100%";
        } else if (pos1 == 31) {
            document.getElementById("counter31a").style.opacity = "100%";
        } else if (pos1 == 32) {
            document.getElementById("counter32a").style.opacity = "100%";
        } else if (pos1 == 33) {
            document.getElementById("counter33a").style.opacity = "100%";
        } else if (pos1 == 34) {
            document.getElementById("counter34a").style.opacity = "100%";
        } else if (pos1 == 35) {
            document.getElementById("counter35a").style.opacity = "100%";
        } else if (pos1 == 36) {
            document.getElementById("counter36a").style.opacity = "100%";
        } else if (pos1 == 37) {
            document.getElementById("counter37a").style.opacity = "100%";
        } else if (pos1 == 38) {
            document.getElementById("counter38a").style.opacity = "100%";
        } else if (pos1 == 39) {
            document.getElementById("counter39a").style.opacity = "100%";
        } else if (pos1 == 40) {
            document.getElementById("counter40a").style.opacity = "100%";
        } else if (pos1 == 41) {
            document.getElementById("counter41a").style.opacity = "100%";
        } else if (pos1 == 42) {
            document.getElementById("counter42a").style.opacity = "100%";
        } else if (pos1 == 43) {
            document.getElementById("counter43a").style.opacity = "100%";
        } else if (pos1 == 44) {
            document.getElementById("counter44a").style.opacity = "100%";
        } else if (pos1 == 45) {
            document.getElementById("counter45a").style.opacity = "100%";
        } else if (pos1 == 46) {
            document.getElementById("counter46a").style.opacity = "100%";
        } else if (pos1 == 47) {
            document.getElementById("counter47a").style.opacity = "100%";
        } else if (pos1 == 48) {
            document.getElementById("counter48a").style.opacity = "100%";
        } else if (pos1 == 49) {
            document.getElementById("counter49a").style.opacity = "100%";
        } else if (pos1 == 50) {
            document.getElementById("counter50a").style.opacity = "100%";
        } else if (pos1 == 51) {
            document.getElementById("counter51a").style.opacity = "100%";
        } else if (pos1 == 52) {
            document.getElementById("counter52a").style.opacity = "100%";
        } else if (pos1 == 53) {
            document.getElementById("counter53a").style.opacity = "100%";
            pos1 = 27;
            document.getElementById("counter1a").style.opacity = "0%";
            document.getElementById("counter2a").style.opacity = "0%";
            document.getElementById("counter3a").style.opacity = "0%";
            document.getElementById("counter4a").style.opacity = "0%";
            document.getElementById("counter5a").style.opacity = "0%";
            document.getElementById("counter6a").style.opacity = "0%";
            document.getElementById("counter7a").style.opacity = "0%";
            document.getElementById("counter8a").style.opacity = "0%";
            document.getElementById("counter9a").style.opacity = "0%";
            document.getElementById("counter10a").style.opacity = "0%";
            document.getElementById("counter11a").style.opacity = "0%";
            document.getElementById("counter12a").style.opacity = "0%";
            document.getElementById("counter13a").style.opacity = "0%";
            document.getElementById("counter14a").style.opacity = "0%";
            document.getElementById("counter15a").style.opacity = "0%";
            document.getElementById("counter16a").style.opacity = "0%";
            document.getElementById("counter17a").style.opacity = "0%";
            document.getElementById("counter18a").style.opacity = "0%";
            document.getElementById("counter19a").style.opacity = "0%";
            document.getElementById("counter20a").style.opacity = "0%";
            document.getElementById("counter21a").style.opacity = "0%";
            document.getElementById("counter22a").style.opacity = "0%";
            document.getElementById("counter23a").style.opacity = "0%";
            document.getElementById("counter24a").style.opacity = "0%";
            document.getElementById("counter25a").style.opacity = "0%";
            document.getElementById("counter26a").style.opacity = "0%";
            document.getElementById("counter27a").style.opacity = "100%";
            document.getElementById("counter28a").style.opacity = "0%";
            document.getElementById("counter29a").style.opacity = "0%";
            document.getElementById("counter30a").style.opacity = "0%";
            document.getElementById("counter31a").style.opacity = "0%";
            document.getElementById("counter32a").style.opacity = "0%";
            document.getElementById("counter33a").style.opacity = "0%";
            document.getElementById("counter34a").style.opacity = "0%";
            document.getElementById("counter35a").style.opacity = "0%";
            document.getElementById("counter36a").style.opacity = "0%";
            document.getElementById("counter37a").style.opacity = "0%";
            document.getElementById("counter38a").style.opacity = "0%";
            document.getElementById("counter39a").style.opacity = "0%";
            document.getElementById("counter40a").style.opacity = "0%";
            document.getElementById("counter41a").style.opacity = "0%";
            document.getElementById("counter42a").style.opacity = "0%";
            document.getElementById("counter43a").style.opacity = "0%";
            document.getElementById("counter44a").style.opacity = "0%";
            document.getElementById("counter45a").style.opacity = "0%";
            document.getElementById("counter46a").style.opacity = "0%";
            document.getElementById("counter47a").style.opacity = "0%";
            document.getElementById("counter48a").style.opacity = "0%";
            document.getElementById("counter49a").style.opacity = "0%";
            document.getElementById("counter50a").style.opacity = "0%";
            document.getElementById("counter51a").style.opacity = "0%";
            document.getElementById("counter52a").style.opacity = "0%";
            document.getElementById("counter53a").style.opacity = "0%";
            document.getElementById("counter54a").style.opacity = "0%";
            document.getElementById("counter55a").style.opacity = "0%";
            document.getElementById("counter56a").style.opacity = "0%";
            document.getElementById("counter57a").style.opacity = "0%";
            document.getElementById("counter58a").style.opacity = "0%";
            document.getElementById("counter59a").style.opacity = "0%";
            document.getElementById("counter60a").style.opacity = "0%";
            document.getElementById("counter61a").style.opacity = "0%";
            document.getElementById("counter62a").style.opacity = "0%";
            document.getElementById("counter63a").style.opacity = "0%";
            document.getElementById("counter64a").style.opacity = "0%";
            document.getElementById("counter65a").style.opacity = "0%";
            document.getElementById("counter66a").style.opacity = "0%";
            document.getElementById("counter67a").style.opacity = "0%";
            document.getElementById("counter68a").style.opacity = "0%";
            document.getElementById("counter69a").style.opacity = "0%";
            document.getElementById("counter70a").style.opacity = "0%";
            document.getElementById("counter71a").style.opacity = "0%";
            document.getElementById("counter72a").style.opacity = "0%";
            document.getElementById("counter73a").style.opacity = "0%";
            document.getElementById("counter74a").style.opacity = "0%";
            document.getElementById("counter75a").style.opacity = "0%";
            document.getElementById("counter76a").style.opacity = "0%";
            document.getElementById("counter77a").style.opacity = "0%";
            document.getElementById("counter78a").style.opacity = "0%";
            document.getElementById("counter79a").style.opacity = "0%";
            document.getElementById("counter80a").style.opacity = "0%";
            document.getElementById("counter81a").style.opacity = "0%";
            document.getElementById("counter82a").style.opacity = "0%";
            document.getElementById("counter83a").style.opacity = "0%";
            document.getElementById("counter84a").style.opacity = "0%";
            document.getElementById("counter85a").style.opacity = "0%";
            document.getElementById("counter86a").style.opacity = "0%";
            document.getElementById("counter87a").style.opacity = "0%";
            document.getElementById("counter88a").style.opacity = "0%";
            document.getElementById("counter89a").style.opacity = "0%";
            document.getElementById("counter90a").style.opacity = "0%";
            document.getElementById("counter91a").style.opacity = "0%";
            document.getElementById("counter92a").style.opacity = "0%";
            document.getElementById("counter93a").style.opacity = "0%";
            document.getElementById("counter94a").style.opacity = "0%";
            document.getElementById("counter95a").style.opacity = "0%";
            document.getElementById("counter96a").style.opacity = "0%";
            document.getElementById("counter97a").style.opacity = "0%";
            document.getElementById("counter98a").style.opacity = "0%";
            document.getElementById("counter99a").style.opacity = "0%";
            document.getElementById("counter100a").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went down a snake!";
        } else if (pos1 == 54) {
            document.getElementById("counter54a").style.opacity = "100%";
        } else if (pos1 == 55) {
            document.getElementById("counter55a").style.opacity = "100%";
        } else if (pos1 == 56) {
            document.getElementById("counter56a").style.opacity = "100%";
        } else if (pos1 == 57) {
            document.getElementById("counter57a").style.opacity = "100%";
        } else if (pos1 == 58) {
            document.getElementById("counter58a").style.opacity = "100%";
        } else if (pos1 == 59) {
            document.getElementById("counter59a").style.opacity = "100%";
            pos1 = 100;
            document.getElementById("counter1a").style.opacity = "0%";
            document.getElementById("counter2a").style.opacity = "0%";
            document.getElementById("counter3a").style.opacity = "0%";
            document.getElementById("counter4a").style.opacity = "0%";
            document.getElementById("counter5a").style.opacity = "0%";
            document.getElementById("counter6a").style.opacity = "0%";
            document.getElementById("counter7a").style.opacity = "0%";
            document.getElementById("counter8a").style.opacity = "0%";
            document.getElementById("counter9a").style.opacity = "0%";
            document.getElementById("counter10a").style.opacity = "0%";
            document.getElementById("counter11a").style.opacity = "0%";
            document.getElementById("counter12a").style.opacity = "0%";
            document.getElementById("counter13a").style.opacity = "0%";
            document.getElementById("counter14a").style.opacity = "0%";
            document.getElementById("counter15a").style.opacity = "0%";
            document.getElementById("counter16a").style.opacity = "0%";
            document.getElementById("counter17a").style.opacity = "0%";
            document.getElementById("counter18a").style.opacity = "0%";
            document.getElementById("counter19a").style.opacity = "0%";
            document.getElementById("counter20a").style.opacity = "0%";
            document.getElementById("counter21a").style.opacity = "0%";
            document.getElementById("counter22a").style.opacity = "0%";
            document.getElementById("counter23a").style.opacity = "0%";
            document.getElementById("counter24a").style.opacity = "0%";
            document.getElementById("counter25a").style.opacity = "0%";
            document.getElementById("counter26a").style.opacity = "0%";
            document.getElementById("counter27a").style.opacity = "0%";
            document.getElementById("counter28a").style.opacity = "0%";
            document.getElementById("counter29a").style.opacity = "0%";
            document.getElementById("counter30a").style.opacity = "0%";
            document.getElementById("counter31a").style.opacity = "0%";
            document.getElementById("counter32a").style.opacity = "0%";
            document.getElementById("counter33a").style.opacity = "0%";
            document.getElementById("counter34a").style.opacity = "0%";
            document.getElementById("counter35a").style.opacity = "0%";
            document.getElementById("counter36a").style.opacity = "0%";
            document.getElementById("counter37a").style.opacity = "0%";
            document.getElementById("counter38a").style.opacity = "0%";
            document.getElementById("counter39a").style.opacity = "0%";
            document.getElementById("counter40a").style.opacity = "0%";
            document.getElementById("counter41a").style.opacity = "0%";
            document.getElementById("counter42a").style.opacity = "0%";
            document.getElementById("counter43a").style.opacity = "0%";
            document.getElementById("counter44a").style.opacity = "0%";
            document.getElementById("counter45a").style.opacity = "0%";
            document.getElementById("counter46a").style.opacity = "0%";
            document.getElementById("counter47a").style.opacity = "0%";
            document.getElementById("counter48a").style.opacity = "0%";
            document.getElementById("counter49a").style.opacity = "0%";
            document.getElementById("counter50a").style.opacity = "0%";
            document.getElementById("counter51a").style.opacity = "0%";
            document.getElementById("counter52a").style.opacity = "0%";
            document.getElementById("counter53a").style.opacity = "0%";
            document.getElementById("counter54a").style.opacity = "0%";
            document.getElementById("counter55a").style.opacity = "0%";
            document.getElementById("counter56a").style.opacity = "0%";
            document.getElementById("counter57a").style.opacity = "0%";
            document.getElementById("counter58a").style.opacity = "0%";
            document.getElementById("counter59a").style.opacity = "0%";
            document.getElementById("counter60a").style.opacity = "0%";
            document.getElementById("counter61a").style.opacity = "0%";
            document.getElementById("counter62a").style.opacity = "0%";
            document.getElementById("counter63a").style.opacity = "0%";
            document.getElementById("counter64a").style.opacity = "0%";
            document.getElementById("counter65a").style.opacity = "0%";
            document.getElementById("counter66a").style.opacity = "0%";
            document.getElementById("counter67a").style.opacity = "0%";
            document.getElementById("counter68a").style.opacity = "0%";
            document.getElementById("counter69a").style.opacity = "0%";
            document.getElementById("counter70a").style.opacity = "0%";
            document.getElementById("counter71a").style.opacity = "0%";
            document.getElementById("counter72a").style.opacity = "0%";
            document.getElementById("counter73a").style.opacity = "0%";
            document.getElementById("counter74a").style.opacity = "0%";
            document.getElementById("counter75a").style.opacity = "0%";
            document.getElementById("counter76a").style.opacity = "0%";
            document.getElementById("counter77a").style.opacity = "0%";
            document.getElementById("counter78a").style.opacity = "0%";
            document.getElementById("counter79a").style.opacity = "0%";
            document.getElementById("counter80a").style.opacity = "0%";
            document.getElementById("counter81a").style.opacity = "0%";
            document.getElementById("counter82a").style.opacity = "0%";
            document.getElementById("counter83a").style.opacity = "0%";
            document.getElementById("counter84a").style.opacity = "0%";
            document.getElementById("counter85a").style.opacity = "0%";
            document.getElementById("counter86a").style.opacity = "0%";
            document.getElementById("counter87a").style.opacity = "0%";
            document.getElementById("counter88a").style.opacity = "0%";
            document.getElementById("counter89a").style.opacity = "0%";
            document.getElementById("counter90a").style.opacity = "0%";
            document.getElementById("counter91a").style.opacity = "0%";
            document.getElementById("counter92a").style.opacity = "0%";
            document.getElementById("counter93a").style.opacity = "0%";
            document.getElementById("counter94a").style.opacity = "0%";
            document.getElementById("counter95a").style.opacity = "0%";
            document.getElementById("counter96a").style.opacity = "0%";
            document.getElementById("counter97a").style.opacity = "0%";
            document.getElementById("counter98a").style.opacity = "0%";
            document.getElementById("counter99a").style.opacity = "0%";
            document.getElementById("counter100a").style.opacity = "100%";
            document.getElementById("message").innerHTML = "you went up a ladder!";
            document.getElementById("background-win").style.opacity = "70%";
            document.getElementById("win").style.opacity = "100%";
            document.getElementById("win-button").style.opacity = "100%";
            document.getElementById("win").innerHTML = "Well Done Player One You Have Won!";

        } else if (pos1 == 60) {
            document.getElementById("counter60a").style.opacity = "100%";
        } else if (pos1 == 61) {
            document.getElementById("counter61a").style.opacity = "100%";
        } else if (pos1 == 62) {
            document.getElementById("counter62a").style.opacity = "100%";
        } else if (pos1 == 63) {
            document.getElementById("counter63a").style.opacity = "100%";
        } else if (pos1 == 64) {
            document.getElementById("counter64a").style.opacity = "100%";
        } else if (pos1 == 65) {
            document.getElementById("counter65a").style.opacity = "100%";
        } else if (pos1 == 66) {
            document.getElementById("counter66a").style.opacity = "100%";
        } else if (pos1 == 67) {
            document.getElementById("counter67a").style.opacity = "100%";
        } else if (pos1 == 68) {
            document.getElementById("counter68a").style.opacity = "100%";
        } else if (pos1 == 69) {
            document.getElementById("counter69a").style.opacity = "100%";
        } else if (pos1 == 70) {
            document.getElementById("counter70a").style.opacity = "100%";
        } else if (pos1 == 71) {
            document.getElementById("counter71a").style.opacity = "100%";
        } else if (pos1 == 72) {
            document.getElementById("counter72a").style.opacity = "100%";
        } else if (pos1 == 73) {
            document.getElementById("counter73a").style.opacity = "100%";
        } else if (pos1 == 74) {
            document.getElementById("counter74a").style.opacity = "100%";
        } else if (pos1 == 75) {
            document.getElementById("counter75a").style.opacity = "100%";
        } else if (pos1 == 76) {
            document.getElementById("counter76a").style.opacity = "100%";
        } else if (pos1 == 77) {
            document.getElementById("counter77a").style.opacity = "100%";
        } else if (pos1 == 78) {
            document.getElementById("counter78a").style.opacity = "100%";
        } else if (pos1 == 79) {
            document.getElementById("counter79a").style.opacity = "100%";
        } else if (pos1 == 80) {
            document.getElementById("counter80a").style.opacity = "100%";
        } else if (pos1 == 81) {
            document.getElementById("counter81a").style.opacity = "100%";
        } else if (pos1 == 82) {
            document.getElementById("counter82a").style.opacity = "100%";
        } else if (pos1 == 83) {
            document.getElementById("counter83a").style.opacity = "100%";
        } else if (pos1 == 84) {
            document.getElementById("counter84a").style.opacity = "100%";
        } else if (pos1 == 85) {
            document.getElementById("counter85a").style.opacity = "100%";
        } else if (pos1 == 86) {
            document.getElementById("counter86a").style.opacity = "100%";
        } else if (pos1 == 87) {
            document.getElementById("counter87a").style.opacity = "100%";
            pos1 = 37;
            document.getElementById("counter1a").style.opacity = "0%";
            document.getElementById("counter2a").style.opacity = "0%";
            document.getElementById("counter3a").style.opacity = "0%";
            document.getElementById("counter4a").style.opacity = "0%";
            document.getElementById("counter5a").style.opacity = "0%";
            document.getElementById("counter6a").style.opacity = "0%";
            document.getElementById("counter7a").style.opacity = "0%";
            document.getElementById("counter8a").style.opacity = "0%";
            document.getElementById("counter9a").style.opacity = "0%";
            document.getElementById("counter10a").style.opacity = "0%";
            document.getElementById("counter11a").style.opacity = "0%";
            document.getElementById("counter12a").style.opacity = "0%";
            document.getElementById("counter13a").style.opacity = "0%";
            document.getElementById("counter14a").style.opacity = "0%";
            document.getElementById("counter15a").style.opacity = "0%";
            document.getElementById("counter16a").style.opacity = "0%";
            document.getElementById("counter17a").style.opacity = "0%";
            document.getElementById("counter18a").style.opacity = "0%";
            document.getElementById("counter19a").style.opacity = "0%";
            document.getElementById("counter20a").style.opacity = "0%";
            document.getElementById("counter21a").style.opacity = "0%";
            document.getElementById("counter22a").style.opacity = "0%";
            document.getElementById("counter23a").style.opacity = "0%";
            document.getElementById("counter24a").style.opacity = "0%";
            document.getElementById("counter25a").style.opacity = "0%";
            document.getElementById("counter26a").style.opacity = "0%";
            document.getElementById("counter27a").style.opacity = "0%";
            document.getElementById("counter28a").style.opacity = "0%";
            document.getElementById("counter29a").style.opacity = "0%";
            document.getElementById("counter30a").style.opacity = "0%";
            document.getElementById("counter31a").style.opacity = "0%";
            document.getElementById("counter32a").style.opacity = "0%";
            document.getElementById("counter33a").style.opacity = "0%";
            document.getElementById("counter34a").style.opacity = "0%";
            document.getElementById("counter35a").style.opacity = "0%";
            document.getElementById("counter36a").style.opacity = "0%";
            document.getElementById("counter37a").style.opacity = "100%";
            document.getElementById("counter38a").style.opacity = "0%";
            document.getElementById("counter39a").style.opacity = "0%";
            document.getElementById("counter40a").style.opacity = "0%";
            document.getElementById("counter41a").style.opacity = "0%";
            document.getElementById("counter42a").style.opacity = "0%";
            document.getElementById("counter43a").style.opacity = "0%";
            document.getElementById("counter44a").style.opacity = "0%";
            document.getElementById("counter45a").style.opacity = "0%";
            document.getElementById("counter46a").style.opacity = "0%";
            document.getElementById("counter47a").style.opacity = "0%";
            document.getElementById("counter48a").style.opacity = "0%";
            document.getElementById("counter49a").style.opacity = "0%";
            document.getElementById("counter50a").style.opacity = "0%";
            document.getElementById("counter51a").style.opacity = "0%";
            document.getElementById("counter52a").style.opacity = "0%";
            document.getElementById("counter53a").style.opacity = "0%";
            document.getElementById("counter54a").style.opacity = "0%";
            document.getElementById("counter55a").style.opacity = "0%";
            document.getElementById("counter56a").style.opacity = "0%";
            document.getElementById("counter57a").style.opacity = "0%";
            document.getElementById("counter58a").style.opacity = "0%";
            document.getElementById("counter59a").style.opacity = "0%";
            document.getElementById("counter60a").style.opacity = "0%";
            document.getElementById("counter61a").style.opacity = "0%";
            document.getElementById("counter62a").style.opacity = "0%";
            document.getElementById("counter63a").style.opacity = "0%";
            document.getElementById("counter64a").style.opacity = "0%";
            document.getElementById("counter65a").style.opacity = "0%";
            document.getElementById("counter66a").style.opacity = "0%";
            document.getElementById("counter67a").style.opacity = "0%";
            document.getElementById("counter68a").style.opacity = "0%";
            document.getElementById("counter69a").style.opacity = "0%";
            document.getElementById("counter70a").style.opacity = "0%";
            document.getElementById("counter71a").style.opacity = "0%";
            document.getElementById("counter72a").style.opacity = "0%";
            document.getElementById("counter73a").style.opacity = "0%";
            document.getElementById("counter74a").style.opacity = "0%";
            document.getElementById("counter75a").style.opacity = "0%";
            document.getElementById("counter76a").style.opacity = "0%";
            document.getElementById("counter77a").style.opacity = "0%";
            document.getElementById("counter78a").style.opacity = "0%";
            document.getElementById("counter79a").style.opacity = "0%";
            document.getElementById("counter80a").style.opacity = "0%";
            document.getElementById("counter81a").style.opacity = "0%";
            document.getElementById("counter82a").style.opacity = "0%";
            document.getElementById("counter83a").style.opacity = "0%";
            document.getElementById("counter84a").style.opacity = "0%";
            document.getElementById("counter85a").style.opacity = "0%";
            document.getElementById("counter86a").style.opacity = "0%";
            document.getElementById("counter87a").style.opacity = "0%";
            document.getElementById("counter88a").style.opacity = "0%";
            document.getElementById("counter89a").style.opacity = "0%";
            document.getElementById("counter90a").style.opacity = "0%";
            document.getElementById("counter91a").style.opacity = "0%";
            document.getElementById("counter92a").style.opacity = "0%";
            document.getElementById("counter93a").style.opacity = "0%";
            document.getElementById("counter94a").style.opacity = "0%";
            document.getElementById("counter95a").style.opacity = "0%";
            document.getElementById("counter96a").style.opacity = "0%";
            document.getElementById("counter97a").style.opacity = "0%";
            document.getElementById("counter98a").style.opacity = "0%";
            document.getElementById("counter99a").style.opacity = "0%";
            document.getElementById("counter100a").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went down a snake!";
        } else if (pos1 == 88) {
            document.getElementById("counter88a").style.opacity = "100%";
        } else if (pos1 == 89) {
            document.getElementById("counter89a").style.opacity = "100%";
        } else if (pos1 == 90) {
            document.getElementById("counter90a").style.opacity = "100%";
        } else if (pos1 == 91) {
            document.getElementById("counter91a").style.opacity = "100%";
        } else if (pos1 == 92) {
            document.getElementById("counter92a").style.opacity = "100%";
        } else if (pos1 == 93) {
            document.getElementById("counter93a").style.opacity = "100%";
        } else if (pos1 == 94) {
            document.getElementById("counter94a").style.opacity = "100%";
        } else if (pos1 == 95) {
            document.getElementById("counter95a").style.opacity = "100%";
        } else if (pos1 == 96) {
            document.getElementById("counter96a").style.opacity = "100%";
        } else if (pos1 == 97) {
            document.getElementById("counter97a").style.opacity = "100%";
        } else if (pos1 == 98) {
            document.getElementById("counter98a").style.opacity = "100%";
        } else if (pos1 == 99) {
            document.getElementById("counter99a").style.opacity = "100%";
        } else if (pos1 >= 100) {
            document.getElementById("counter100a").style.opacity = "100%";
            document.getElementById("background-win").style.opacity = "70%";
            document.getElementById("win").style.opacity = "100%";
            document.getElementById("win-button").style.opacity = "100%";
            document.getElementById("win").innerHTML = "Well Done Player One You Have Won!";
        }
    }
}
//the fundtion run when the player 2 button is pressed
// it is identical to the player one function but its code changes the second player
function player2() {
    if (order >= 2) {
        order--;
        count++;
        document.getElementById("counter1b").style.opacity = "0%";
        document.getElementById("counter2b").style.opacity = "0%";
        document.getElementById("counter3b").style.opacity = "0%";
        document.getElementById("counter4b").style.opacity = "0%";
        document.getElementById("counter5b").style.opacity = "0%";
        document.getElementById("counter6b").style.opacity = "0%";
        document.getElementById("counter7b").style.opacity = "0%";
        document.getElementById("counter8b").style.opacity = "0%";
        document.getElementById("counter9b").style.opacity = "0%";
        document.getElementById("counter10b").style.opacity = "0%";
        document.getElementById("counter11b").style.opacity = "0%";
        document.getElementById("counter12b").style.opacity = "0%";
        document.getElementById("counter13b").style.opacity = "0%";
        document.getElementById("counter14b").style.opacity = "0%";
        document.getElementById("counter15b").style.opacity = "0%";
        document.getElementById("counter16b").style.opacity = "0%";
        document.getElementById("counter17b").style.opacity = "0%";
        document.getElementById("counter18b").style.opacity = "0%";
        document.getElementById("counter19b").style.opacity = "0%";
        document.getElementById("counter20b").style.opacity = "0%";
        document.getElementById("counter21b").style.opacity = "0%";
        document.getElementById("counter22b").style.opacity = "0%";
        document.getElementById("counter23b").style.opacity = "0%";
        document.getElementById("counter24b").style.opacity = "0%";
        document.getElementById("counter25b").style.opacity = "0%";
        document.getElementById("counter26b").style.opacity = "0%";
        document.getElementById("counter27b").style.opacity = "0%";
        document.getElementById("counter28b").style.opacity = "0%";
        document.getElementById("counter29b").style.opacity = "0%";
        document.getElementById("counter30b").style.opacity = "0%";
        document.getElementById("counter31b").style.opacity = "0%";
        document.getElementById("counter32b").style.opacity = "0%";
        document.getElementById("counter33b").style.opacity = "0%";
        document.getElementById("counter34b").style.opacity = "0%";
        document.getElementById("counter35b").style.opacity = "0%";
        document.getElementById("counter36b").style.opacity = "0%";
        document.getElementById("counter37b").style.opacity = "0%";
        document.getElementById("counter38b").style.opacity = "0%";
        document.getElementById("counter39b").style.opacity = "0%";
        document.getElementById("counter40b").style.opacity = "0%";
        document.getElementById("counter41b").style.opacity = "0%";
        document.getElementById("counter42b").style.opacity = "0%";
        document.getElementById("counter43b").style.opacity = "0%";
        document.getElementById("counter44b").style.opacity = "0%";
        document.getElementById("counter45b").style.opacity = "0%";
        document.getElementById("counter46b").style.opacity = "0%";
        document.getElementById("counter47b").style.opacity = "0%";
        document.getElementById("counter48b").style.opacity = "0%";
        document.getElementById("counter49b").style.opacity = "0%";
        document.getElementById("counter50b").style.opacity = "0%";
        document.getElementById("counter51b").style.opacity = "0%";
        document.getElementById("counter52b").style.opacity = "0%";
        document.getElementById("counter53b").style.opacity = "0%";
        document.getElementById("counter54b").style.opacity = "0%";
        document.getElementById("counter55b").style.opacity = "0%";
        document.getElementById("counter56b").style.opacity = "0%";
        document.getElementById("counter57b").style.opacity = "0%";
        document.getElementById("counter58b").style.opacity = "0%";
        document.getElementById("counter59b").style.opacity = "0%";
        document.getElementById("counter60b").style.opacity = "0%";
        document.getElementById("counter61b").style.opacity = "0%";
        document.getElementById("counter62b").style.opacity = "0%";
        document.getElementById("counter63b").style.opacity = "0%";
        document.getElementById("counter64b").style.opacity = "0%";
        document.getElementById("counter65b").style.opacity = "0%";
        document.getElementById("counter66b").style.opacity = "0%";
        document.getElementById("counter67b").style.opacity = "0%";
        document.getElementById("counter68b").style.opacity = "0%";
        document.getElementById("counter69b").style.opacity = "0%";
        document.getElementById("counter70b").style.opacity = "0%";
        document.getElementById("counter71b").style.opacity = "0%";
        document.getElementById("counter72b").style.opacity = "0%";
        document.getElementById("counter73b").style.opacity = "0%";
        document.getElementById("counter74b").style.opacity = "0%";
        document.getElementById("counter75b").style.opacity = "0%";
        document.getElementById("counter76b").style.opacity = "0%";
        document.getElementById("counter77b").style.opacity = "0%";
        document.getElementById("counter78b").style.opacity = "0%";
        document.getElementById("counter79b").style.opacity = "0%";
        document.getElementById("counter80b").style.opacity = "0%";
        document.getElementById("counter81b").style.opacity = "0%";
        document.getElementById("counter82b").style.opacity = "0%";
        document.getElementById("counter83b").style.opacity = "0%";
        document.getElementById("counter84b").style.opacity = "0%";
        document.getElementById("counter85b").style.opacity = "0%";
        document.getElementById("counter86b").style.opacity = "0%";
        document.getElementById("counter87b").style.opacity = "0%";
        document.getElementById("counter88b").style.opacity = "0%";
        document.getElementById("counter89b").style.opacity = "0%";
        document.getElementById("counter90b").style.opacity = "0%";
        document.getElementById("counter91b").style.opacity = "0%";
        document.getElementById("counter92b").style.opacity = "0%";
        document.getElementById("counter93b").style.opacity = "0%";
        document.getElementById("counter94b").style.opacity = "0%";
        document.getElementById("counter95b").style.opacity = "0%";
        document.getElementById("counter96b").style.opacity = "0%";
        document.getElementById("counter97b").style.opacity = "0%";
        document.getElementById("counter98b").style.opacity = "0%";
        document.getElementById("counter99b").style.opacity = "0%";
        document.getElementById("counter100b").style.opacity = "0%";
        var rannum = Math.floor(Math.random() * 6) + 1;
        if (rannum == 1) {
            numcount1++;
            pos2++;
            document.getElementById("bottomleft").style.opacity = 0;
            document.getElementById("topright").style.opacity = 0;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("bottomleft").style.opacity = 0;
            document.getElementById("topright").style.opacity = 0;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("message").innerHTML = "you moved 1 space";
        } else if (rannum == 2) {
            numcount2++;
            pos2++;
            pos2++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 0;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("message").innerHTML = "you moved 2 spaces";
        } else if (rannum == 3) {
            numcount3++;
            pos2++;
            pos2++;
            pos2++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("message").innerHTML = "you moved 3 spaces";
        } else if (rannum == 4) {
            numcount4++;
            pos2++;
            pos2++;
            pos2++;
            pos2++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("message").innerHTML = "you moved 4 spaces";
        } else if (rannum == 5) {
            numcount5++;
            pos2++;
            pos2++;
            pos2++;
            pos2++;
            pos2++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            document.getElementById("message").innerHTML = "you moved 5 spaces";
        } else if (rannum == 6) {
            numcount6++;
            pos2++;
            pos2++;
            pos2++;
            pos2++;
            pos2++;
            pos2++;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 1;
            document.getElementById("middleright").style.opacity = 1;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 1;
            document.getElementById("middleright").style.opacity = 1;
            document.getElementById("middle").style.opacity = 0;
            document.getElementById("message").innerHTML = "you moved 6 spaces";
        }
        if (pos2 == 1) {
            document.getElementById("counter1b").style.opacity = "100%";
        } else if (pos2 == 2) {
            document.getElementById("counter2b").style.opacity = "100%";
        } else if (pos2 == 3) {
            document.getElementById("counter3b").style.opacity = "100%";
        } else if (pos2 == 4) {
            document.getElementById("counter4b").style.opacity = "100%";
        } else if (pos2 == 5) {
            document.getElementById("counter5b").style.opacity = "100%";
        } else if (pos2 == 6) {
            document.getElementById("counter6b").style.opacity = "100%";
        } else if (pos2 == 7) {
            document.getElementById("counter7b").style.opacity = "100%";
        } else if (pos2 == 8) {
            document.getElementById("counter8b").style.opacity = "100%";
        } else if (pos2 == 9) {
            document.getElementById("counter9b").style.opacity = "100%";
            pos2 = 12;
            document.getElementById("counter1b").style.opacity = "0%";
            document.getElementById("counter2b").style.opacity = "100%";
            document.getElementById("counter3b").style.opacity = "0%";
            document.getElementById("counter4b").style.opacity = "0%";
            document.getElementById("counter5b").style.opacity = "0%";
            document.getElementById("counter6b").style.opacity = "0%";
            document.getElementById("counter7b").style.opacity = "0%";
            document.getElementById("counter8b").style.opacity = "0%";
            document.getElementById("counter9b").style.opacity = "0%";
            document.getElementById("counter10b").style.opacity = "0%";
            document.getElementById("counter11b").style.opacity = "0%";
            document.getElementById("counter12b").style.opacity = "100%";
            document.getElementById("counter13b").style.opacity = "0%";
            document.getElementById("counter14b").style.opacity = "0%";
            document.getElementById("counter15b").style.opacity = "0%";
            document.getElementById("counter16b").style.opacity = "0%";
            document.getElementById("counter17b").style.opacity = "0%";
            document.getElementById("counter18b").style.opacity = "0%";
            document.getElementById("counter19b").style.opacity = "0%";
            document.getElementById("counter20b").style.opacity = "0%";
            document.getElementById("counter21b").style.opacity = "0%";
            document.getElementById("counter22b").style.opacity = "0%";
            document.getElementById("counter23b").style.opacity = "0%";
            document.getElementById("counter24b").style.opacity = "0%";
            document.getElementById("counter25b").style.opacity = "0%";
            document.getElementById("counter26b").style.opacity = "0%";
            document.getElementById("counter27b").style.opacity = "0%";
            document.getElementById("counter28b").style.opacity = "0%";
            document.getElementById("counter29b").style.opacity = "0%";
            document.getElementById("counter30b").style.opacity = "0%";
            document.getElementById("counter31b").style.opacity = "0%";
            document.getElementById("counter32b").style.opacity = "0%";
            document.getElementById("counter33b").style.opacity = "0%";
            document.getElementById("counter34b").style.opacity = "0%";
            document.getElementById("counter35b").style.opacity = "0%";
            document.getElementById("counter36b").style.opacity = "0%";
            document.getElementById("counter37b").style.opacity = "0%";
            document.getElementById("counter38b").style.opacity = "0%";
            document.getElementById("counter39b").style.opacity = "0%";
            document.getElementById("counter40b").style.opacity = "0%";
            document.getElementById("counter41b").style.opacity = "0%";
            document.getElementById("counter42b").style.opacity = "0%";
            document.getElementById("counter43b").style.opacity = "0%";
            document.getElementById("counter44b").style.opacity = "0%";
            document.getElementById("counter45b").style.opacity = "0%";
            document.getElementById("counter46b").style.opacity = "0%";
            document.getElementById("counter47b").style.opacity = "0%";
            document.getElementById("counter48b").style.opacity = "0%";
            document.getElementById("counter49b").style.opacity = "0%";
            document.getElementById("counter50b").style.opacity = "0%";
            document.getElementById("counter51b").style.opacity = "0%";
            document.getElementById("counter52b").style.opacity = "0%";
            document.getElementById("counter53b").style.opacity = "0%";
            document.getElementById("counter54b").style.opacity = "0%";
            document.getElementById("counter55b").style.opacity = "0%";
            document.getElementById("counter56b").style.opacity = "0%";
            document.getElementById("counter57b").style.opacity = "0%";
            document.getElementById("counter58b").style.opacity = "0%";
            document.getElementById("counter59b").style.opacity = "0%";
            document.getElementById("counter60b").style.opacity = "0%";
            document.getElementById("counter61b").style.opacity = "0%";
            document.getElementById("counter62b").style.opacity = "0%";
            document.getElementById("counter63b").style.opacity = "0%";
            document.getElementById("counter64b").style.opacity = "0%";
            document.getElementById("counter65b").style.opacity = "0%";
            document.getElementById("counter66b").style.opacity = "0%";
            document.getElementById("counter67b").style.opacity = "0%";
            document.getElementById("counter68b").style.opacity = "0%";
            document.getElementById("counter69b").style.opacity = "0%";
            document.getElementById("counter70b").style.opacity = "0%";
            document.getElementById("counter71b").style.opacity = "0%";
            document.getElementById("counter72b").style.opacity = "0%";
            document.getElementById("counter73b").style.opacity = "0%";
            document.getElementById("counter74b").style.opacity = "0%";
            document.getElementById("counter75b").style.opacity = "0%";
            document.getElementById("counter76b").style.opacity = "0%";
            document.getElementById("counter77b").style.opacity = "0%";
            document.getElementById("counter78b").style.opacity = "0%";
            document.getElementById("counter79b").style.opacity = "0%";
            document.getElementById("counter80b").style.opacity = "0%";
            document.getElementById("counter81b").style.opacity = "0%";
            document.getElementById("counter82b").style.opacity = "0%";
            document.getElementById("counter83b").style.opacity = "0%";
            document.getElementById("counter84b").style.opacity = "0%";
            document.getElementById("counter85b").style.opacity = "0%";
            document.getElementById("counter86b").style.opacity = "0%";
            document.getElementById("counter87b").style.opacity = "0%";
            document.getElementById("counter88b").style.opacity = "0%";
            document.getElementById("counter89b").style.opacity = "0%";
            document.getElementById("counter90b").style.opacity = "0%";
            document.getElementById("counter91b").style.opacity = "0%";
            document.getElementById("counter92b").style.opacity = "0%";
            document.getElementById("counter93b").style.opacity = "0%";
            document.getElementById("counter94b").style.opacity = "0%";
            document.getElementById("counter95b").style.opacity = "0%";
            document.getElementById("counter96b").style.opacity = "0%";
            document.getElementById("counter97b").style.opacity = "0%";
            document.getElementById("counter98b").style.opacity = "0%";
            document.getElementById("counter99b").style.opacity = "0%";
            document.getElementById("counter100b").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went up a ladder!";
        } else if (pos2 == 10) {
            document.getElementById("counter10b").style.opacity = "100%";
        } else if (pos2 == 11) {
            document.getElementById("counter11b").style.opacity = "100%";
        } else if (pos2 == 12) {
            document.getElementById("counter12b").style.opacity = "100%";
        } else if (pos2 == 13) {
            document.getElementById("counter13b").style.opacity = "100%";
        } else if (pos2 == 14) {
            document.getElementById("counter14b").style.opacity = "100%";
        } else if (pos2 == 15) {
            document.getElementById("counter15b").style.opacity = "100%";
        } else if (pos2 == 16) {
            document.getElementById("counter16b").style.opacity = "100%";
            pos2 = 2;
            document.getElementById("counter1b").style.opacity = "0%";
            document.getElementById("counter2b").style.opacity = "100%";
            document.getElementById("counter3b").style.opacity = "0%";
            document.getElementById("counter4b").style.opacity = "0%";
            document.getElementById("counter5b").style.opacity = "0%";
            document.getElementById("counter6b").style.opacity = "0%";
            document.getElementById("counter7b").style.opacity = "0%";
            document.getElementById("counter8b").style.opacity = "0%";
            document.getElementById("counter9b").style.opacity = "0%";
            document.getElementById("counter10b").style.opacity = "0%";
            document.getElementById("counter11b").style.opacity = "0%";
            document.getElementById("counter12b").style.opacity = "0%";
            document.getElementById("counter13b").style.opacity = "0%";
            document.getElementById("counter14b").style.opacity = "0%";
            document.getElementById("counter15b").style.opacity = "0%";
            document.getElementById("counter16b").style.opacity = "0%";
            document.getElementById("counter17b").style.opacity = "0%";
            document.getElementById("counter18b").style.opacity = "0%";
            document.getElementById("counter19b").style.opacity = "0%";
            document.getElementById("counter20b").style.opacity = "0%";
            document.getElementById("counter21b").style.opacity = "0%";
            document.getElementById("counter22b").style.opacity = "0%";
            document.getElementById("counter23b").style.opacity = "0%";
            document.getElementById("counter24b").style.opacity = "0%";
            document.getElementById("counter25b").style.opacity = "0%";
            document.getElementById("counter26b").style.opacity = "0%";
            document.getElementById("counter27b").style.opacity = "0%";
            document.getElementById("counter28b").style.opacity = "0%";
            document.getElementById("counter29b").style.opacity = "0%";
            document.getElementById("counter30b").style.opacity = "0%";
            document.getElementById("counter31b").style.opacity = "0%";
            document.getElementById("counter32b").style.opacity = "0%";
            document.getElementById("counter33b").style.opacity = "0%";
            document.getElementById("counter34b").style.opacity = "0%";
            document.getElementById("counter35b").style.opacity = "0%";
            document.getElementById("counter36b").style.opacity = "0%";
            document.getElementById("counter37b").style.opacity = "0%";
            document.getElementById("counter38b").style.opacity = "0%";
            document.getElementById("counter39b").style.opacity = "0%";
            document.getElementById("counter40b").style.opacity = "0%";
            document.getElementById("counter41b").style.opacity = "0%";
            document.getElementById("counter42b").style.opacity = "0%";
            document.getElementById("counter43b").style.opacity = "0%";
            document.getElementById("counter44b").style.opacity = "0%";
            document.getElementById("counter45b").style.opacity = "0%";
            document.getElementById("counter46b").style.opacity = "0%";
            document.getElementById("counter47b").style.opacity = "0%";
            document.getElementById("counter48b").style.opacity = "0%";
            document.getElementById("counter49b").style.opacity = "0%";
            document.getElementById("counter50b").style.opacity = "0%";
            document.getElementById("counter51b").style.opacity = "0%";
            document.getElementById("counter52b").style.opacity = "0%";
            document.getElementById("counter53b").style.opacity = "0%";
            document.getElementById("counter54b").style.opacity = "0%";
            document.getElementById("counter55b").style.opacity = "0%";
            document.getElementById("counter56b").style.opacity = "0%";
            document.getElementById("counter57b").style.opacity = "0%";
            document.getElementById("counter58b").style.opacity = "0%";
            document.getElementById("counter59b").style.opacity = "0%";
            document.getElementById("counter60b").style.opacity = "0%";
            document.getElementById("counter61b").style.opacity = "0%";
            document.getElementById("counter62b").style.opacity = "0%";
            document.getElementById("counter63b").style.opacity = "0%";
            document.getElementById("counter64b").style.opacity = "0%";
            document.getElementById("counter65b").style.opacity = "0%";
            document.getElementById("counter66b").style.opacity = "0%";
            document.getElementById("counter67b").style.opacity = "0%";
            document.getElementById("counter68b").style.opacity = "0%";
            document.getElementById("counter69b").style.opacity = "0%";
            document.getElementById("counter70b").style.opacity = "0%";
            document.getElementById("counter71b").style.opacity = "0%";
            document.getElementById("counter72b").style.opacity = "0%";
            document.getElementById("counter73b").style.opacity = "0%";
            document.getElementById("counter74b").style.opacity = "0%";
            document.getElementById("counter75b").style.opacity = "0%";
            document.getElementById("counter76b").style.opacity = "0%";
            document.getElementById("counter77b").style.opacity = "0%";
            document.getElementById("counter78b").style.opacity = "0%";
            document.getElementById("counter79b").style.opacity = "0%";
            document.getElementById("counter80b").style.opacity = "0%";
            document.getElementById("counter81b").style.opacity = "0%";
            document.getElementById("counter82b").style.opacity = "0%";
            document.getElementById("counter83b").style.opacity = "0%";
            document.getElementById("counter84b").style.opacity = "0%";
            document.getElementById("counter85b").style.opacity = "0%";
            document.getElementById("counter86b").style.opacity = "0%";
            document.getElementById("counter87b").style.opacity = "0%";
            document.getElementById("counter88b").style.opacity = "0%";
            document.getElementById("counter89b").style.opacity = "0%";
            document.getElementById("counter90b").style.opacity = "0%";
            document.getElementById("counter91b").style.opacity = "0%";
            document.getElementById("counter92b").style.opacity = "0%";
            document.getElementById("counter93b").style.opacity = "0%";
            document.getElementById("counter94b").style.opacity = "0%";
            document.getElementById("counter95b").style.opacity = "0%";
            document.getElementById("counter96b").style.opacity = "0%";
            document.getElementById("counter97b").style.opacity = "0%";
            document.getElementById("counter98b").style.opacity = "0%";
            document.getElementById("counter99b").style.opacity = "0%";
            document.getElementById("counter100b").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went down a snake!";
        } else if (pos2 == 17) {
            document.getElementById("counter17b").style.opacity = "100%";
        } else if (pos2 == 18) {
            document.getElementById("counter18b").style.opacity = "100%";
        } else if (pos2 == 19) {
            document.getElementById("counter19b").style.opacity = "100%";
        } else if (pos2 == 20) {
            document.getElementById("counter20b").style.opacity = "100%";
        } else if (pos2 == 21) {
            document.getElementById("counter21b").style.opacity = "100%";
        } else if (pos2 == 22) {
            document.getElementById("counter22b").style.opacity = "100%";
        } else if (pos2 == 23) {
            document.getElementById("counter23b").style.opacity = "100%";
        } else if (pos2 == 24) {
            document.getElementById("counter24b").style.opacity = "100%";
        } else if (pos2 == 25) {
            document.getElementById("counter25b").style.opacity = "100%";
        } else if (pos2 == 26) {
            document.getElementById("counter26b").style.opacity = "100%";
        } else if (pos2 == 27) {
            document.getElementById("counter27b").style.opacity = "100%";
        } else if (pos2 == 28) {
            document.getElementById("counter28b").style.opacity = "100%";
        } else if (pos2 == 29) {
            document.getElementById("counter29b").style.opacity = "100%";
        } else if (pos2 == 30) {
            document.getElementById("counter30b").style.opacity = "100%";
        } else if (pos2 == 31) {
            document.getElementById("counter31b").style.opacity = "100%";
        } else if (pos2 == 32) {
            document.getElementById("counter32b").style.opacity = "100%";
        } else if (pos2 == 33) {
            document.getElementById("counter33b").style.opacity = "100%";
        } else if (pos2 == 34) {
            document.getElementById("counter34b").style.opacity = "100%";
        } else if (pos2 == 35) {
            document.getElementById("counter35b").style.opacity = "100%";
        } else if (pos2 == 36) {
            document.getElementById("counter36b").style.opacity = "100%";
        } else if (pos2 == 37) {
            document.getElementById("counter37b").style.opacity = "100%";
        } else if (pos2 == 38) {
            document.getElementById("counter38b").style.opacity = "100%";
        } else if (pos2 == 39) {
            document.getElementById("counter39b").style.opacity = "100%";
        } else if (pos2 == 40) {
            document.getElementById("counter40b").style.opacity = "100%";
        } else if (pos2 == 41) {
            document.getElementById("counter41b").style.opacity = "100%";
        } else if (pos2 == 42) {
            document.getElementById("counter42b").style.opacity = "100%";
        } else if (pos2 == 43) {
            document.getElementById("counter43b").style.opacity = "100%";
        } else if (pos2 == 44) {
            document.getElementById("counter44b").style.opacity = "100%";
        } else if (pos2 == 45) {
            document.getElementById("counter45b").style.opacity = "100%";
        } else if (pos2 == 46) {
            document.getElementById("counter46b").style.opacity = "100%";
        } else if (pos2 == 47) {
            document.getElementById("counter47b").style.opacity = "100%";
        } else if (pos2 == 48) {
            document.getElementById("counter48b").style.opacity = "100%";
        } else if (pos2 == 49) {
            document.getElementById("counter49b").style.opacity = "100%";
        } else if (pos2 == 50) {
            document.getElementById("counter50b").style.opacity = "100%";
        } else if (pos2 == 51) {
            document.getElementById("counter51b").style.opacity = "100%";
        } else if (pos2 == 52) {
            document.getElementById("counter52b").style.opacity = "100%";
        } else if (pos2 == 53) {
            document.getElementById("counter53b").style.opacity = "100%";
            pos2 = 27;
            document.getElementById("counter1b").style.opacity = "0%";
            document.getElementById("counter2b").style.opacity = "0%";
            document.getElementById("counter3b").style.opacity = "0%";
            document.getElementById("counter4b").style.opacity = "0%";
            document.getElementById("counter5b").style.opacity = "0%";
            document.getElementById("counter6b").style.opacity = "0%";
            document.getElementById("counter7b").style.opacity = "0%";
            document.getElementById("counter8b").style.opacity = "0%";
            document.getElementById("counter9b").style.opacity = "0%";
            document.getElementById("counter10b").style.opacity = "0%";
            document.getElementById("counter11b").style.opacity = "0%";
            document.getElementById("counter12b").style.opacity = "0%";
            document.getElementById("counter13b").style.opacity = "0%";
            document.getElementById("counter14b").style.opacity = "0%";
            document.getElementById("counter15b").style.opacity = "0%";
            document.getElementById("counter16b").style.opacity = "0%";
            document.getElementById("counter17b").style.opacity = "0%";
            document.getElementById("counter18b").style.opacity = "0%";
            document.getElementById("counter19b").style.opacity = "0%";
            document.getElementById("counter20b").style.opacity = "0%";
            document.getElementById("counter21b").style.opacity = "0%";
            document.getElementById("counter22b").style.opacity = "0%";
            document.getElementById("counter23b").style.opacity = "0%";
            document.getElementById("counter24b").style.opacity = "0%";
            document.getElementById("counter25b").style.opacity = "0%";
            document.getElementById("counter26b").style.opacity = "0%";
            document.getElementById("counter27b").style.opacity = "100%";
            document.getElementById("counter28b").style.opacity = "0%";
            document.getElementById("counter29b").style.opacity = "0%";
            document.getElementById("counter30b").style.opacity = "0%";
            document.getElementById("counter31b").style.opacity = "0%";
            document.getElementById("counter32b").style.opacity = "0%";
            document.getElementById("counter33b").style.opacity = "0%";
            document.getElementById("counter34b").style.opacity = "0%";
            document.getElementById("counter35b").style.opacity = "0%";
            document.getElementById("counter36b").style.opacity = "0%";
            document.getElementById("counter37b").style.opacity = "0%";
            document.getElementById("counter38b").style.opacity = "0%";
            document.getElementById("counter39b").style.opacity = "0%";
            document.getElementById("counter40b").style.opacity = "0%";
            document.getElementById("counter41b").style.opacity = "0%";
            document.getElementById("counter42b").style.opacity = "0%";
            document.getElementById("counter43b").style.opacity = "0%";
            document.getElementById("counter44b").style.opacity = "0%";
            document.getElementById("counter45b").style.opacity = "0%";
            document.getElementById("counter46b").style.opacity = "0%";
            document.getElementById("counter47b").style.opacity = "0%";
            document.getElementById("counter48b").style.opacity = "0%";
            document.getElementById("counter49b").style.opacity = "0%";
            document.getElementById("counter50b").style.opacity = "0%";
            document.getElementById("counter51b").style.opacity = "0%";
            document.getElementById("counter52b").style.opacity = "0%";
            document.getElementById("counter53b").style.opacity = "0%";
            document.getElementById("counter54b").style.opacity = "0%";
            document.getElementById("counter55b").style.opacity = "0%";
            document.getElementById("counter56b").style.opacity = "0%";
            document.getElementById("counter57b").style.opacity = "0%";
            document.getElementById("counter58b").style.opacity = "0%";
            document.getElementById("counter59b").style.opacity = "0%";
            document.getElementById("counter60b").style.opacity = "0%";
            document.getElementById("counter61b").style.opacity = "0%";
            document.getElementById("counter62b").style.opacity = "0%";
            document.getElementById("counter63b").style.opacity = "0%";
            document.getElementById("counter64b").style.opacity = "0%";
            document.getElementById("counter65b").style.opacity = "0%";
            document.getElementById("counter66b").style.opacity = "0%";
            document.getElementById("counter67b").style.opacity = "0%";
            document.getElementById("counter68b").style.opacity = "0%";
            document.getElementById("counter69b").style.opacity = "0%";
            document.getElementById("counter70b").style.opacity = "0%";
            document.getElementById("counter71b").style.opacity = "0%";
            document.getElementById("counter72b").style.opacity = "0%";
            document.getElementById("counter73b").style.opacity = "0%";
            document.getElementById("counter74b").style.opacity = "0%";
            document.getElementById("counter75b").style.opacity = "0%";
            document.getElementById("counter76b").style.opacity = "0%";
            document.getElementById("counter77b").style.opacity = "0%";
            document.getElementById("counter78b").style.opacity = "0%";
            document.getElementById("counter79b").style.opacity = "0%";
            document.getElementById("counter80b").style.opacity = "0%";
            document.getElementById("counter81b").style.opacity = "0%";
            document.getElementById("counter82b").style.opacity = "0%";
            document.getElementById("counter83b").style.opacity = "0%";
            document.getElementById("counter84b").style.opacity = "0%";
            document.getElementById("counter85b").style.opacity = "0%";
            document.getElementById("counter86b").style.opacity = "0%";
            document.getElementById("counter87b").style.opacity = "0%";
            document.getElementById("counter88b").style.opacity = "0%";
            document.getElementById("counter89b").style.opacity = "0%";
            document.getElementById("counter90b").style.opacity = "0%";
            document.getElementById("counter91b").style.opacity = "0%";
            document.getElementById("counter92b").style.opacity = "0%";
            document.getElementById("counter93b").style.opacity = "0%";
            document.getElementById("counter94b").style.opacity = "0%";
            document.getElementById("counter95b").style.opacity = "0%";
            document.getElementById("counter96b").style.opacity = "0%";
            document.getElementById("counter97b").style.opacity = "0%";
            document.getElementById("counter98b").style.opacity = "0%";
            document.getElementById("counter99b").style.opacity = "0%";
            document.getElementById("counter100b").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went down a snake!";
        } else if (pos2 == 54) {
            document.getElementById("counter54b").style.opacity = "100%";
        } else if (pos2 == 55) {
            document.getElementById("counter55b").style.opacity = "100%";
        } else if (pos2 == 56) {
            document.getElementById("counter56b").style.opacity = "100%";
        } else if (pos2 == 57) {
            document.getElementById("counter57b").style.opacity = "100%";
        } else if (pos2 == 58) {
            document.getElementById("counter58b").style.opacity = "100%";
        } else if (pos2 == 59) {
            document.getElementById("counter59b").style.opacity = "100%";
            pos2 = 100;
            document.getElementById("counter1b").style.opacity = "0%";
            document.getElementById("counter2b").style.opacity = "0%";
            document.getElementById("counter3b").style.opacity = "0%";
            document.getElementById("counter4b").style.opacity = "0%";
            document.getElementById("counter5b").style.opacity = "0%";
            document.getElementById("counter6b").style.opacity = "0%";
            document.getElementById("counter7b").style.opacity = "0%";
            document.getElementById("counter8b").style.opacity = "0%";
            document.getElementById("counter9b").style.opacity = "0%";
            document.getElementById("counter10b").style.opacity = "0%";
            document.getElementById("counter11b").style.opacity = "0%";
            document.getElementById("counter12b").style.opacity = "0%";
            document.getElementById("counter13b").style.opacity = "0%";
            document.getElementById("counter14b").style.opacity = "0%";
            document.getElementById("counter15b").style.opacity = "0%";
            document.getElementById("counter16b").style.opacity = "0%";
            document.getElementById("counter17b").style.opacity = "0%";
            document.getElementById("counter18b").style.opacity = "0%";
            document.getElementById("counter19b").style.opacity = "0%";
            document.getElementById("counter20b").style.opacity = "0%";
            document.getElementById("counter21b").style.opacity = "0%";
            document.getElementById("counter22b").style.opacity = "0%";
            document.getElementById("counter23b").style.opacity = "0%";
            document.getElementById("counter24b").style.opacity = "0%";
            document.getElementById("counter25b").style.opacity = "0%";
            document.getElementById("counter26b").style.opacity = "0%";
            document.getElementById("counter27b").style.opacity = "0%";
            document.getElementById("counter28b").style.opacity = "0%";
            document.getElementById("counter29b").style.opacity = "0%";
            document.getElementById("counter30b").style.opacity = "0%";
            document.getElementById("counter31b").style.opacity = "0%";
            document.getElementById("counter32b").style.opacity = "0%";
            document.getElementById("counter33b").style.opacity = "0%";
            document.getElementById("counter34b").style.opacity = "0%";
            document.getElementById("counter35b").style.opacity = "0%";
            document.getElementById("counter36b").style.opacity = "0%";
            document.getElementById("counter37b").style.opacity = "0%";
            document.getElementById("counter38b").style.opacity = "0%";
            document.getElementById("counter39b").style.opacity = "0%";
            document.getElementById("counter40b").style.opacity = "0%";
            document.getElementById("counter41b").style.opacity = "0%";
            document.getElementById("counter42b").style.opacity = "0%";
            document.getElementById("counter43b").style.opacity = "0%";
            document.getElementById("counter44b").style.opacity = "0%";
            document.getElementById("counter45b").style.opacity = "0%";
            document.getElementById("counter46b").style.opacity = "0%";
            document.getElementById("counter47b").style.opacity = "0%";
            document.getElementById("counter48b").style.opacity = "0%";
            document.getElementById("counter49b").style.opacity = "0%";
            document.getElementById("counter50b").style.opacity = "0%";
            document.getElementById("counter51b").style.opacity = "0%";
            document.getElementById("counter52b").style.opacity = "0%";
            document.getElementById("counter53b").style.opacity = "0%";
            document.getElementById("counter54b").style.opacity = "0%";
            document.getElementById("counter55b").style.opacity = "0%";
            document.getElementById("counter56b").style.opacity = "0%";
            document.getElementById("counter57b").style.opacity = "0%";
            document.getElementById("counter58b").style.opacity = "0%";
            document.getElementById("counter59b").style.opacity = "0%";
            document.getElementById("counter60b").style.opacity = "0%";
            document.getElementById("counter61b").style.opacity = "0%";
            document.getElementById("counter62b").style.opacity = "0%";
            document.getElementById("counter63b").style.opacity = "0%";
            document.getElementById("counter64b").style.opacity = "0%";
            document.getElementById("counter65b").style.opacity = "0%";
            document.getElementById("counter66b").style.opacity = "0%";
            document.getElementById("counter67b").style.opacity = "0%";
            document.getElementById("counter68b").style.opacity = "0%";
            document.getElementById("counter69b").style.opacity = "0%";
            document.getElementById("counter70b").style.opacity = "0%";
            document.getElementById("counter71b").style.opacity = "0%";
            document.getElementById("counter72b").style.opacity = "0%";
            document.getElementById("counter73b").style.opacity = "0%";
            document.getElementById("counter74b").style.opacity = "0%";
            document.getElementById("counter75b").style.opacity = "0%";
            document.getElementById("counter76b").style.opacity = "0%";
            document.getElementById("counter77b").style.opacity = "0%";
            document.getElementById("counter78b").style.opacity = "0%";
            document.getElementById("counter79b").style.opacity = "0%";
            document.getElementById("counter80b").style.opacity = "0%";
            document.getElementById("counter81b").style.opacity = "0%";
            document.getElementById("counter82b").style.opacity = "0%";
            document.getElementById("counter83b").style.opacity = "0%";
            document.getElementById("counter84b").style.opacity = "0%";
            document.getElementById("counter85b").style.opacity = "0%";
            document.getElementById("counter86b").style.opacity = "0%";
            document.getElementById("counter87b").style.opacity = "0%";
            document.getElementById("counter88b").style.opacity = "0%";
            document.getElementById("counter89b").style.opacity = "0%";
            document.getElementById("counter90b").style.opacity = "0%";
            document.getElementById("counter91b").style.opacity = "0%";
            document.getElementById("counter92b").style.opacity = "0%";
            document.getElementById("counter93b").style.opacity = "0%";
            document.getElementById("counter94b").style.opacity = "0%";
            document.getElementById("counter95b").style.opacity = "0%";
            document.getElementById("counter96b").style.opacity = "0%";
            document.getElementById("counter97b").style.opacity = "0%";
            document.getElementById("counter98b").style.opacity = "0%";
            document.getElementById("counter99b").style.opacity = "0%";
            document.getElementById("counter100b").style.opacity = "100%";
            document.getElementById("message").innerHTML = "you went up a ladder!";
            document.getElementById("background-win").style.opacity = "70%";
            document.getElementById("win").style.opacity = "100%";
            document.getElementById("win-button").style.opacity = "100%";
            document.getElementById("win").innerHTML = "Well Done Player Two You Have Won!";
        } else if (pos2 == 60) {
            document.getElementById("counter60b").style.opacity = "100%";
        } else if (pos2 == 61) {
            document.getElementById("counter61b").style.opacity = "100%";
        } else if (pos2 == 62) {
            document.getElementById("counter62b").style.opacity = "100%";
        } else if (pos2 == 63) {
            document.getElementById("counter63b").style.opacity = "100%";
        } else if (pos2 == 64) {
            document.getElementById("counter64b").style.opacity = "100%";
        } else if (pos2 == 65) {
            document.getElementById("counter65b").style.opacity = "100%";
        } else if (pos2 == 66) {
            document.getElementById("counter66b").style.opacity = "100%";
        } else if (pos2 == 67) {
            document.getElementById("counter67b").style.opacity = "100%";
        } else if (pos2 == 68) {
            document.getElementById("counter68b").style.opacity = "100%";
        } else if (pos2 == 69) {
            document.getElementById("counter69b").style.opacity = "100%";
        } else if (pos2 == 70) {
            document.getElementById("counter70b").style.opacity = "100%";
        } else if (pos2 == 71) {
            document.getElementById("counter71b").style.opacity = "100%";
        } else if (pos2 == 72) {
            document.getElementById("counter72b").style.opacity = "100%";
        } else if (pos2 == 73) {
            document.getElementById("counter73b").style.opacity = "100%";
        } else if (pos2 == 74) {
            document.getElementById("counter74b").style.opacity = "100%";
        } else if (pos2 == 75) {
            document.getElementById("counter75b").style.opacity = "100%";
        } else if (pos2 == 76) {
            document.getElementById("counter76b").style.opacity = "100%";
        } else if (pos2 == 77) {
            document.getElementById("counter77b").style.opacity = "100%";
        } else if (pos2 == 78) {
            document.getElementById("counter78b").style.opacity = "100%";
        } else if (pos2 == 79) {
            document.getElementById("counter79b").style.opacity = "100%";
        } else if (pos2 == 80) {
            document.getElementById("counter80b").style.opacity = "100%";
        } else if (pos2 == 81) {
            document.getElementById("counter81b").style.opacity = "100%";
        } else if (pos2 == 82) {
            document.getElementById("counter82b").style.opacity = "100%";
        } else if (pos2 == 83) {
            document.getElementById("counter83b").style.opacity = "100%";
        } else if (pos2 == 84) {
            document.getElementById("counter84b").style.opacity = "100%";
        } else if (pos2 == 85) {
            document.getElementById("counter85b").style.opacity = "100%";
        } else if (pos2 == 86) {
            document.getElementById("counter86b").style.opacity = "100%";
        } else if (pos2 == 87) {
            document.getElementById("counter87b").style.opacity = "100%";
            pos2 = 37;
            document.getElementById("counter1b").style.opacity = "0%";
            document.getElementById("counter2b").style.opacity = "0%";
            document.getElementById("counter3b").style.opacity = "0%";
            document.getElementById("counter4b").style.opacity = "0%";
            document.getElementById("counter5b").style.opacity = "0%";
            document.getElementById("counter6b").style.opacity = "0%";
            document.getElementById("counter7b").style.opacity = "0%";
            document.getElementById("counter8b").style.opacity = "0%";
            document.getElementById("counter9b").style.opacity = "0%";
            document.getElementById("counter10b").style.opacity = "0%";
            document.getElementById("counter11b").style.opacity = "0%";
            document.getElementById("counter12b").style.opacity = "0%";
            document.getElementById("counter13b").style.opacity = "0%";
            document.getElementById("counter14b").style.opacity = "0%";
            document.getElementById("counter15b").style.opacity = "0%";
            document.getElementById("counter16b").style.opacity = "0%";
            document.getElementById("counter17b").style.opacity = "0%";
            document.getElementById("counter18b").style.opacity = "0%";
            document.getElementById("counter19b").style.opacity = "0%";
            document.getElementById("counter20b").style.opacity = "0%";
            document.getElementById("counter21b").style.opacity = "0%";
            document.getElementById("counter22b").style.opacity = "0%";
            document.getElementById("counter23b").style.opacity = "0%";
            document.getElementById("counter24b").style.opacity = "0%";
            document.getElementById("counter25b").style.opacity = "0%";
            document.getElementById("counter26b").style.opacity = "0%";
            document.getElementById("counter27b").style.opacity = "0%";
            document.getElementById("counter28b").style.opacity = "0%";
            document.getElementById("counter29b").style.opacity = "0%";
            document.getElementById("counter30b").style.opacity = "0%";
            document.getElementById("counter31b").style.opacity = "0%";
            document.getElementById("counter32b").style.opacity = "0%";
            document.getElementById("counter33b").style.opacity = "0%";
            document.getElementById("counter34b").style.opacity = "0%";
            document.getElementById("counter35b").style.opacity = "0%";
            document.getElementById("counter36b").style.opacity = "0%";
            document.getElementById("counter37b").style.opacity = "100%";
            document.getElementById("counter38b").style.opacity = "0%";
            document.getElementById("counter39b").style.opacity = "0%";
            document.getElementById("counter40b").style.opacity = "0%";
            document.getElementById("counter41b").style.opacity = "0%";
            document.getElementById("counter42b").style.opacity = "0%";
            document.getElementById("counter43b").style.opacity = "0%";
            document.getElementById("counter44b").style.opacity = "0%";
            document.getElementById("counter45b").style.opacity = "0%";
            document.getElementById("counter46b").style.opacity = "0%";
            document.getElementById("counter47b").style.opacity = "0%";
            document.getElementById("counter48b").style.opacity = "0%";
            document.getElementById("counter49b").style.opacity = "0%";
            document.getElementById("counter50b").style.opacity = "0%";
            document.getElementById("counter51b").style.opacity = "0%";
            document.getElementById("counter52b").style.opacity = "0%";
            document.getElementById("counter53b").style.opacity = "0%";
            document.getElementById("counter54b").style.opacity = "0%";
            document.getElementById("counter55b").style.opacity = "0%";
            document.getElementById("counter56b").style.opacity = "0%";
            document.getElementById("counter57b").style.opacity = "0%";
            document.getElementById("counter58b").style.opacity = "0%";
            document.getElementById("counter59b").style.opacity = "0%";
            document.getElementById("counter60b").style.opacity = "0%";
            document.getElementById("counter61b").style.opacity = "0%";
            document.getElementById("counter62b").style.opacity = "0%";
            document.getElementById("counter63b").style.opacity = "0%";
            document.getElementById("counter64b").style.opacity = "0%";
            document.getElementById("counter65b").style.opacity = "0%";
            document.getElementById("counter66b").style.opacity = "0%";
            document.getElementById("counter67b").style.opacity = "0%";
            document.getElementById("counter68b").style.opacity = "0%";
            document.getElementById("counter69b").style.opacity = "0%";
            document.getElementById("counter70b").style.opacity = "0%";
            document.getElementById("counter71b").style.opacity = "0%";
            document.getElementById("counter72b").style.opacity = "0%";
            document.getElementById("counter73b").style.opacity = "0%";
            document.getElementById("counter74b").style.opacity = "0%";
            document.getElementById("counter75b").style.opacity = "0%";
            document.getElementById("counter76b").style.opacity = "0%";
            document.getElementById("counter77b").style.opacity = "0%";
            document.getElementById("counter78b").style.opacity = "0%";
            document.getElementById("counter79b").style.opacity = "0%";
            document.getElementById("counter80b").style.opacity = "0%";
            document.getElementById("counter81b").style.opacity = "0%";
            document.getElementById("counter82b").style.opacity = "0%";
            document.getElementById("counter83b").style.opacity = "0%";
            document.getElementById("counter84b").style.opacity = "0%";
            document.getElementById("counter85b").style.opacity = "0%";
            document.getElementById("counter86b").style.opacity = "0%";
            document.getElementById("counter87b").style.opacity = "0%";
            document.getElementById("counter88b").style.opacity = "0%";
            document.getElementById("counter89b").style.opacity = "0%";
            document.getElementById("counter90b").style.opacity = "0%";
            document.getElementById("counter91b").style.opacity = "0%";
            document.getElementById("counter92b").style.opacity = "0%";
            document.getElementById("counter93b").style.opacity = "0%";
            document.getElementById("counter94b").style.opacity = "0%";
            document.getElementById("counter95b").style.opacity = "0%";
            document.getElementById("counter96b").style.opacity = "0%";
            document.getElementById("counter97b").style.opacity = "0%";
            document.getElementById("counter98b").style.opacity = "0%";
            document.getElementById("counter99b").style.opacity = "0%";
            document.getElementById("counter100b").style.opacity = "0%";
            document.getElementById("message").innerHTML = "you went down a snake!";
        } else if (pos2 == 88) {
            document.getElementById("counter88b").style.opacity = "100%";
        } else if (pos2 == 89) {
            document.getElementById("counter89b").style.opacity = "100%";
        } else if (pos2 == 90) {
            document.getElementById("counter90b").style.opacity = "100%";
        } else if (pos2 == 91) {
            document.getElementById("counter91b").style.opacity = "100%";
        } else if (pos2 == 92) {
            document.getElementById("counter92b").style.opacity = "100%";
        } else if (pos2 == 93) {
            document.getElementById("counter93b").style.opacity = "100%";
        } else if (pos2 == 94) {
            document.getElementById("counter94b").style.opacity = "100%";
        } else if (pos2 == 95) {
            document.getElementById("counter95b").style.opacity = "100%";
        } else if (pos2 == 96) {
            document.getElementById("counter96b").style.opacity = "100%";
        } else if (pos2 == 97) {
            document.getElementById("counter97b").style.opacity = "100%";
        } else if (pos2 == 98) {
            document.getElementById("counter98b").style.opacity = "100%";
        } else if (pos2 == 99) {
            document.getElementById("counter99b").style.opacity = "100%";
        } else if (pos2 >= 100) {
            document.getElementById("counter100b").style.opacity = "100%";
            document.getElementById("background-win").style.opacity = "70%";
            document.getElementById("win").style.opacity = "100%";
            document.getElementById("win-button").style.opacity = "100%";
            document.getElementById("win").innerHTML = "Well Done Player Two You Have Won!";
        }
    }
}

function winRestart() {
    pos1 = 1;
    pos2 = 1;
    document.getElementById("counter1a").style.opacity = "0%";
    document.getElementById("counter2a").style.opacity = "0%";
    document.getElementById("counter3a").style.opacity = "0%";
    document.getElementById("counter4a").style.opacity = "0%";
    document.getElementById("counter5a").style.opacity = "0%";
    document.getElementById("counter6a").style.opacity = "0%";
    document.getElementById("counter7a").style.opacity = "0%";
    document.getElementById("counter8a").style.opacity = "0%";
    document.getElementById("counter9a").style.opacity = "0%";
    document.getElementById("counter10a").style.opacity = "0%";
    document.getElementById("counter11a").style.opacity = "0%";
    document.getElementById("counter12a").style.opacity = "0%";
    document.getElementById("counter13a").style.opacity = "0%";
    document.getElementById("counter14a").style.opacity = "0%";
    document.getElementById("counter15a").style.opacity = "0%";
    document.getElementById("counter16a").style.opacity = "0%";
    document.getElementById("counter17a").style.opacity = "0%";
    document.getElementById("counter18a").style.opacity = "0%";
    document.getElementById("counter19a").style.opacity = "0%";
    document.getElementById("counter20a").style.opacity = "0%";
    document.getElementById("counter21a").style.opacity = "0%";
    document.getElementById("counter22a").style.opacity = "0%";
    document.getElementById("counter23a").style.opacity = "0%";
    document.getElementById("counter24a").style.opacity = "0%";
    document.getElementById("counter25a").style.opacity = "0%";
    document.getElementById("counter26a").style.opacity = "0%";
    document.getElementById("counter27a").style.opacity = "0%";
    document.getElementById("counter28a").style.opacity = "0%";
    document.getElementById("counter29a").style.opacity = "0%";
    document.getElementById("counter30a").style.opacity = "0%";
    document.getElementById("counter31a").style.opacity = "0%";
    document.getElementById("counter32a").style.opacity = "0%";
    document.getElementById("counter33a").style.opacity = "0%";
    document.getElementById("counter34a").style.opacity = "0%";
    document.getElementById("counter35a").style.opacity = "0%";
    document.getElementById("counter36a").style.opacity = "0%";
    document.getElementById("counter37a").style.opacity = "0%";
    document.getElementById("counter38a").style.opacity = "0%";
    document.getElementById("counter39a").style.opacity = "0%";
    document.getElementById("counter40a").style.opacity = "0%";
    document.getElementById("counter41a").style.opacity = "0%";
    document.getElementById("counter42a").style.opacity = "0%";
    document.getElementById("counter43a").style.opacity = "0%";
    document.getElementById("counter44a").style.opacity = "0%";
    document.getElementById("counter45a").style.opacity = "0%";
    document.getElementById("counter46a").style.opacity = "0%";
    document.getElementById("counter47a").style.opacity = "0%";
    document.getElementById("counter48a").style.opacity = "0%";
    document.getElementById("counter49a").style.opacity = "0%";
    document.getElementById("counter50a").style.opacity = "0%";
    document.getElementById("counter51a").style.opacity = "0%";
    document.getElementById("counter52a").style.opacity = "0%";
    document.getElementById("counter53a").style.opacity = "0%";
    document.getElementById("counter54a").style.opacity = "0%";
    document.getElementById("counter55a").style.opacity = "0%";
    document.getElementById("counter56a").style.opacity = "0%";
    document.getElementById("counter57a").style.opacity = "0%";
    document.getElementById("counter58a").style.opacity = "0%";
    document.getElementById("counter59a").style.opacity = "0%";
    document.getElementById("counter60a").style.opacity = "0%";
    document.getElementById("counter61a").style.opacity = "0%";
    document.getElementById("counter62a").style.opacity = "0%";
    document.getElementById("counter63a").style.opacity = "0%";
    document.getElementById("counter64a").style.opacity = "0%";
    document.getElementById("counter65a").style.opacity = "0%";
    document.getElementById("counter66a").style.opacity = "0%";
    document.getElementById("counter67a").style.opacity = "0%";
    document.getElementById("counter68a").style.opacity = "0%";
    document.getElementById("counter69a").style.opacity = "0%";
    document.getElementById("counter70a").style.opacity = "0%";
    document.getElementById("counter71a").style.opacity = "0%";
    document.getElementById("counter72a").style.opacity = "0%";
    document.getElementById("counter73a").style.opacity = "0%";
    document.getElementById("counter74a").style.opacity = "0%";
    document.getElementById("counter75a").style.opacity = "0%";
    document.getElementById("counter76a").style.opacity = "0%";
    document.getElementById("counter77a").style.opacity = "0%";
    document.getElementById("counter78a").style.opacity = "0%";
    document.getElementById("counter79a").style.opacity = "0%";
    document.getElementById("counter80a").style.opacity = "0%";
    document.getElementById("counter81a").style.opacity = "0%";
    document.getElementById("counter82a").style.opacity = "0%";
    document.getElementById("counter83a").style.opacity = "0%";
    document.getElementById("counter84a").style.opacity = "0%";
    document.getElementById("counter85a").style.opacity = "0%";
    document.getElementById("counter86a").style.opacity = "0%";
    document.getElementById("counter87a").style.opacity = "0%";
    document.getElementById("counter88a").style.opacity = "0%";
    document.getElementById("counter89a").style.opacity = "0%";
    document.getElementById("counter90a").style.opacity = "0%";
    document.getElementById("counter91a").style.opacity = "0%";
    document.getElementById("counter92a").style.opacity = "0%";
    document.getElementById("counter93a").style.opacity = "0%";
    document.getElementById("counter94a").style.opacity = "0%";
    document.getElementById("counter95a").style.opacity = "0%";
    document.getElementById("counter96a").style.opacity = "0%";
    document.getElementById("counter97a").style.opacity = "0%";
    document.getElementById("counter98a").style.opacity = "0%";
    document.getElementById("counter99a").style.opacity = "0%";
    document.getElementById("counter100a").style.opacity = "0%";
    document.getElementById("counter1b").style.opacity = "0%";
    document.getElementById("counter2b").style.opacity = "0%";
    document.getElementById("counter3b").style.opacity = "0%";
    document.getElementById("counter4b").style.opacity = "0%";
    document.getElementById("counter5b").style.opacity = "0%";
    document.getElementById("counter6b").style.opacity = "0%";
    document.getElementById("counter7b").style.opacity = "0%";
    document.getElementById("counter8b").style.opacity = "0%";
    document.getElementById("counter9b").style.opacity = "0%";
    document.getElementById("counter10b").style.opacity = "0%";
    document.getElementById("counter11b").style.opacity = "0%";
    document.getElementById("counter12b").style.opacity = "0%";
    document.getElementById("counter13b").style.opacity = "0%";
    document.getElementById("counter14b").style.opacity = "0%";
    document.getElementById("counter15b").style.opacity = "0%";
    document.getElementById("counter16b").style.opacity = "0%";
    document.getElementById("counter17b").style.opacity = "0%";
    document.getElementById("counter18b").style.opacity = "0%";
    document.getElementById("counter19b").style.opacity = "0%";
    document.getElementById("counter20b").style.opacity = "0%";
    document.getElementById("counter21b").style.opacity = "0%";
    document.getElementById("counter22b").style.opacity = "0%";
    document.getElementById("counter23b").style.opacity = "0%";
    document.getElementById("counter24b").style.opacity = "0%";
    document.getElementById("counter25b").style.opacity = "0%";
    document.getElementById("counter26b").style.opacity = "0%";
    document.getElementById("counter27b").style.opacity = "0%";
    document.getElementById("counter28b").style.opacity = "0%";
    document.getElementById("counter29b").style.opacity = "0%";
    document.getElementById("counter30b").style.opacity = "0%";
    document.getElementById("counter31b").style.opacity = "0%";
    document.getElementById("counter32b").style.opacity = "0%";
    document.getElementById("counter33b").style.opacity = "0%";
    document.getElementById("counter34b").style.opacity = "0%";
    document.getElementById("counter35b").style.opacity = "0%";
    document.getElementById("counter36b").style.opacity = "0%";
    document.getElementById("counter37b").style.opacity = "0%";
    document.getElementById("counter38b").style.opacity = "0%";
    document.getElementById("counter39b").style.opacity = "0%";
    document.getElementById("counter40b").style.opacity = "0%";
    document.getElementById("counter41b").style.opacity = "0%";
    document.getElementById("counter42b").style.opacity = "0%";
    document.getElementById("counter43b").style.opacity = "0%";
    document.getElementById("counter44b").style.opacity = "0%";
    document.getElementById("counter45b").style.opacity = "0%";
    document.getElementById("counter46b").style.opacity = "0%";
    document.getElementById("counter47b").style.opacity = "0%";
    document.getElementById("counter48b").style.opacity = "0%";
    document.getElementById("counter49b").style.opacity = "0%";
    document.getElementById("counter50b").style.opacity = "0%";
    document.getElementById("counter51b").style.opacity = "0%";
    document.getElementById("counter52b").style.opacity = "0%";
    document.getElementById("counter53b").style.opacity = "0%";
    document.getElementById("counter54b").style.opacity = "0%";
    document.getElementById("counter55b").style.opacity = "0%";
    document.getElementById("counter56b").style.opacity = "0%";
    document.getElementById("counter57b").style.opacity = "0%";
    document.getElementById("counter58b").style.opacity = "0%";
    document.getElementById("counter59b").style.opacity = "0%";
    document.getElementById("counter60b").style.opacity = "0%";
    document.getElementById("counter61b").style.opacity = "0%";
    document.getElementById("counter62b").style.opacity = "0%";
    document.getElementById("counter63b").style.opacity = "0%";
    document.getElementById("counter64b").style.opacity = "0%";
    document.getElementById("counter65b").style.opacity = "0%";
    document.getElementById("counter66b").style.opacity = "0%";
    document.getElementById("counter67b").style.opacity = "0%";
    document.getElementById("counter68b").style.opacity = "0%";
    document.getElementById("counter69b").style.opacity = "0%";
    document.getElementById("counter70b").style.opacity = "0%";
    document.getElementById("counter71b").style.opacity = "0%";
    document.getElementById("counter72b").style.opacity = "0%";
    document.getElementById("counter73b").style.opacity = "0%";
    document.getElementById("counter74b").style.opacity = "0%";
    document.getElementById("counter75b").style.opacity = "0%";
    document.getElementById("counter76b").style.opacity = "0%";
    document.getElementById("counter77b").style.opacity = "0%";
    document.getElementById("counter78b").style.opacity = "0%";
    document.getElementById("counter79b").style.opacity = "0%";
    document.getElementById("counter80b").style.opacity = "0%";
    document.getElementById("counter81b").style.opacity = "0%";
    document.getElementById("counter82b").style.opacity = "0%";
    document.getElementById("counter83b").style.opacity = "0%";
    document.getElementById("counter84b").style.opacity = "0%";
    document.getElementById("counter85b").style.opacity = "0%";
    document.getElementById("counter86b").style.opacity = "0%";
    document.getElementById("counter87b").style.opacity = "0%";
    document.getElementById("counter88b").style.opacity = "0%";
    document.getElementById("counter89b").style.opacity = "0%";
    document.getElementById("counter90b").style.opacity = "0%";
    document.getElementById("counter91b").style.opacity = "0%";
    document.getElementById("counter92b").style.opacity = "0%";
    document.getElementById("counter93b").style.opacity = "0%";
    document.getElementById("counter94b").style.opacity = "0%";
    document.getElementById("counter95b").style.opacity = "0%";
    document.getElementById("counter96b").style.opacity = "0%";
    document.getElementById("counter97b").style.opacity = "0%";
    document.getElementById("counter98b").style.opacity = "0%";
    document.getElementById("counter99b").style.opacity = "0%";
    document.getElementById("counter100b").style.opacity = "0%";
    document.getElementById("counter1a").style.opacity = "100%";
    document.getElementById("counter1b").style.opacity = "100%";
    document.getElementById("background-win").style.opacity = "0%";
    document.getElementById("win").style.opacity = "0%";
    document.getElementById("win-button").style.opacity = "0%";
}