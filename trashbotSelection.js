class trashbotSelection{
    #firstGameInstance = null;
    constructor() {
        if (this.#firstGameInstance) {
            return this.#firstGameInstance;
        }
        this.#firstGameInstance = this;
        return this.#firstGameInstance;
    }

    //methods
    addPreviouslyUsedTitles(indexUsed){
        previouslyUsedTitleIndices.push(indexUsed)
    }
    addpreviouslyAdminTitles(indexUsed){
        previouslyUsedAdminTitlesIndices.push(indexUsed)
    }
    getRandomInt(indicesArray, maxLen) {
        //init
        var flag=false
        var checkPrevious
        var breakFlag = 0
        if(indicesArray == lightNovelTitles){
            checkPrevious = previouslyUsedTitleIndices
            //console.log("normal")
        }
        else{
            checkPrevious = previouslyUsedAdminTitlesIndices
            //console.log("admin")
        }
        //console.log(previouslyUsedTitleIndices)
        //console.log(checkPrevious)
        //picking
        while(!flag){
            var randomIndex = Math.floor(Math.random() * maxLen)
            //console.log(randomIndex)
            if(displayNovels.includes(randomIndex)==false && checkPrevious.includes(randomIndex)==false){
                displayNovels.push(randomIndex)
                flag=true
            }
            breakFlag=breakFlag+1
            if(breakFlag > 10){
                flag=true //break out regardless
            }
        }
    }
    pickTitles(indicesArray, numTitles){
        //init
        displayNovels = [] //for multiple taps
        document.getElementById("displayList").innerHTML = "" //clear
        var len = indicesArray.length

        //get indices for display
        for(var i=0;i<numTitles;i++){
            this.getRandomInt(indicesArray, len)
        }

        //display to HTML
        for(var j=0;j<displayNovels.length;j++){
            var passTitle = String(displayNovels[j]) + ". " + indicesArray[displayNovels[j]]
            document.getElementById("displayList").innerHTML += "<li>"+passTitle+"</li>"
        }
    }
}