//init
var db = new trashbotSelection()

//data
const lightNovelTitles = [
    "Eternal Hero Academia: School Idol Boys and Girls in Love with a Geek",
    "I'm a bad boy, but I really love a girl with a big brother!",
    "A Certain Magical Index: The Magical Index of Princess Rhapsody Breast",
    "Eternal Darkness and Reject My Contract with the Goddess of Death!",
    "Crazy About You? (DEMONOGATARI), a sweet sweet but evil maid",
    "Saving The Earth from Another World! Bonus Story: What Happens Next?",
    "The Hero and the Cursed World of Otome Games. A Tale of Two Sisters",
    "The Demon Lord is Reborn! Reincarnation begins! Reincarnation begins at a meeting of the goddess of death!",
    "Love and War: A Novel of Commonplace Romance",
    "By God's Will and His Mercy, I continue to eat and do the things I am commanded!",
    "She Was Never A Cat at the End of a Dungeon! The Story of Mina",
    "The Holy Knight’s Curse: A Magical Index and Escalation of Sins",
    "The King of Destruction is Dead! Part 1",
    "A Dark Prince and the Evil God Only Knows Comedy",
    "The Seven Deadly Sins: An Explosion at Summer Vacation School",
    "The Dark Side of the Moon. The Demon King's Revenge",
    "The Tale of the Sixteen-YEAR-OLD God of War",
    "In Another World as a Witch and the Strongest Gamer: So What?",
    "Potato and the Half-Maid in a Dungeon! Part 2: A Night at the Bedroom",
    "All I'll do is make you love me.",
    "Sensei Still Loves My Pet Dog, Despite That She Was Secretly A Dragon!",
    "Ruler of the Strongest Demon Lord's Villainess",
    "Potato-Cooked Pizza at the End of Summer Vacation! So You Want to Eat It!",
    "Grimoire of the Silver Knight and the Mysterious Girl who Survived in Another World",
    "There Is No Place for Us in These Skies!",
    "I'm a Kid again??!?!?!?!?!?!?!?",
    "Sigh and cry for mercy?!?!?!",
    "Gotta Make Up for Your Sex Life!",
    "The Unwanted Virginity Of A Genius",
    "Tear It Up! Another Wonderful World is Not for Me",
    "I Was Your Angel, So I'll Never Pay the Rent for My Love",
    "Gods and Automaton Chronicles: How to Train Your Dragon Knight in a Dungeon.",
    "The Unforgiving Teacher Who Wants to Lead a Strong Female Life",
    "Chivalry and the Catastrophe in Another World?! Bonus Story: We're On A Mission!",
    "A Life of the Average Magi; Part 1: How to Exist in a Fantasy World",
    "The Reincarnated Prince and the Automaton's Sword Art Online: Reborn as a Sword",
    "Eternal Life as a Clumsy Assassin, Part 2",
    "How Does It Work?!",
    "Potato Baker-kun! School Idol Club 2nd Sword Art Online: A Promise from My School",
    "I'll Never Let You Try to Pick Up Girls in a Dungeon!",
    "I am the strongest from Earth. My name is Princess Moonflower Village, I am the Lead Prince of the Fairy Forest. I am Reincarnated as a Mage",
    "My name is a Shimamura Shiki, I'm the Reincarnated Princess of a Different Dimension World.",
    "Is There a Dragon that Doesn't Love You? Leave me the number!",
    "I'm a Dungeon Master! This is my last adventure!?!?!",
    "The Tale of the Princess and the Forbidden Beast: A Novel, Part 2",
    "She Lives in a Fantasy World Where Children Are Never Faced With Death",
    "I Was Born As A Demon Knight, But I'm Now A Maid",
    "I Am the Hero and the Cursed King is in Love with You!",
    "I'll Never Be Your Average Side Character, but for the Love of Mine!",
    "Crazy Business! I'll Never Try to Summon a Dragon Lord!",
    "I Write H-fiction Every Day!",
    "I'm the Boss and You are the Boss",
    "An Ancient Tale of Six Commonest Boys and the Undine in a Fantasy World!",
    "The Disappearance of an Ordinary, Holy Knight of the World.",
    "I was a girl. These are my secrets, but you've got to keep them.",
    "NON STOP! STOP! STOP! STOP!",
    "Kingdom Hearts: Chain of Memories",
    "The Girl Who Lives in Another World! - The Princess",
    "The Last Witch’s Night! A Promise from my Vampire God",
    "Tales of Haruhi Suzumiya",
    "In Another World as a Fake Prince, I Live as a Witch!!",
    "I'm a Hero! School Idol is for Dummies! Bonus Story: A small paradise",
    "I'll Never Let a Beast Lie in My House.",
    "Monster Girl ~The End of the World~",
    "Potato: The World's Strongest Detective Agency. I've Got a Little Dream About Living in Another World.",
    "Wizard vs. the Half-Blood Prince’s Hero.",
    "The Strongest Star Online: Awakening of the Strongest, and only the Strongest",
    "I'm the master of my sexual relationship with the Princess! I want to be your girlfriend!",
    "The Greatest Detective's Rebellion in Another World. From Villain to Hero!",
    "The Alchemist's Apprentice and the Paranormal Detective Agency's Undertaker - Part 2",
    "All the Earth's Wants is Kill You! Wait! Even a Brief Adventure!",
    "I want to Be the Brave’s Hero, but I want you to know I am not a succubus?!",
    "Wanders of the Black Flame; Night Elf Adventurers Guide to World War III",
    "Potato-Cola Explosion: The Tale of Otome and His Big Sister! It's Only a Fantasy!",
    "No Matter What Other Person You Are, I'll Do My Best To Keep You All Safe In Paradise",
    "Eternal Star Princess and the Forbidden Planet: The Reunion of the King of the Twilight",
    "My Big Sister Lives in a Fantasy World! Where are the best girls?!",
    "The World's Strongest Gamer: The Gamer Girl's Journey from Novelist to Cleric",
    "The God Slayer and the Forbidden Journey to Unforgiving Extinction: Part 2",
    "Welcome to the World of Tomorrow! A magical world waiting to be explored",
    "Sleeping with a Dream: The Journey of a Mage in Another World",
    "The End of the world as I expected it.",
    "The Prince and the Dragon Slayer is Dead?!?!?!",
    "The Hero's Rejects the Dark Side of the Road and Lives in a Fantasy World!",
    "A New Clothes for the Girls' Night Out: The Novel",
    "Crazy about the Moon?!?!?!",
    "Potato Eater: From a certain villager to a certain god is born! The Legend of Yuki",
    "The Story of Raising a Dragon Lord - Part 1",
    "The Secret World of Otome Games: A Tale of the World's Strongest Villainess",
    "I Will Defeat You in Another World!",
    "Dawn of the Dungeon: Another Story.",
    "I Am Not A Monster, but an Elf, I Am the Hero!",
    "Ao-san!?!?!?!?",
    "Kang Dynasty: Invasion Of The Isekai-Verse",
    "I Am the King of Death, Part 1: The End of a New World",
    "Crazy about Life and Death! Let's go! The Next Level!",
    "Konosuba: An Explosion on This Wonderful World, Part 2",
    "Sloppy-Temptation Princess Returns: The Novel of My School!",
    "Eternal Flame’s Promise and the Apocalypse’s End",
    "Potato Explosion: This is a Typical Disappearance! Another World's Strongest Villain is Coming for a Bite!",
    "Papa! I'm the best! Even after a year of bad love, I'm a man.",
    "Mitsuya Mikami: A Certain Magical Index Side Story――The Parallel World",
    "The Greatest Gamer's Guide to Civilization: Beyond the Dark World",
    "Crayon Knight vs. the Weakest Cat",
    "The Greatest Fairy Tale of Magus' Awakening: An Explosion in Space",
    "Potato Eater: The Unending Series of Parallel Lives in a Fantasy World?",
    "I Want to Defeat the Demon Lord of the Night",
    "I am the only prince, I am the the best and the strongest in my kingdom",
    "The Disappearance of Marielle Clarac: From Assassin to Mage King",
    "Another World War II: The Awakening of Haruhi Suzumiya",
    "Overrun! The Dream of Otome Games",
    "Our Crappy Social Anime Club Is Gonna Make The Most Epic Anime",
    "SWEET BLACK LIGHT: THE GAME OVER!",
    "The Book of Death and Life by J.K.K.",
    "The Dragon Knight's Apprentice Prince and the Exiled Prince of Suzumonoshiba",
    "The Mysterious Angel Who Lived in a Fantasy World for 5 Years or So",
    "Potato Bear: My First Trip to Japan: Part 1 Bonus Episode! Bonus Episode! Bonus Episode!",
    "The Holy Spirit is Reborn in Another World",
    "The Legend of Magus Magus: The Magus' Apprentice in Another World",
    "The World's Strongest Swordsman"
]
const adminNovelTitles = [
    "Tom's Side Story: How the Gamer Mom Got the Game",
    "Jake the Slave and a Sword Prince: Awakening of a Mythical Legend",
    "Trashbotcher's Knife, Part 2",
    "Tom is the Witch's Guide to Disaster Magic: A Tale of Ordinary Life",
    "Katelyn S-Ranked Murder with My Girlfriend: Rise Against the Machine",
    "Trashbot!?!?!?!?!?!",
    "Ben: The Bizarre Mistress of Death, Part 2: From Mistaken Hero to Hero",
    "Benetaphonia: A Brief Trip to the World's Strongest",
    "Drake’s’tcherd",
    "Ian's Secret, Prologue to Star Wars: The Novel, Part 1",
    "Jake the Combat Butler: Episode 1",
    "Tom and the Disappearance of a Fairy",
    "Rizuka: The Story of a Failed Apprentice",
    "Ian-’s’s’s’s",
    "Franklin: A Social Media Monster Reborn II: Part 1",
    "Jake: Where Are You?!?!?!",
    "Ian & Alice's Adventures in Wonderland! Where are the Girls!?",
    "Rizuka's Dream: A Novel of the Wonderful World!",
    "Rizzulai: Another Side Story: An Explosion on the Verdurous Planet",
    "Franklin's Tale Against Humanity. Story of a Young Werewolf",
    "Jake the Strongest Gamer in the Universe: The Novel of the New School Idol",
    "Rizzulina of the Dead: The Last Witch",
    "Solymar: An Explosion on My Heart",
    "Tom Wants to Play with Your Mom!",
    "Solymar's Secret Diary of a Vampire Princess",
    "Benjamin Button is the Strongest Gamer in the world?!?!?!",
    "Jake's War Diary: I Became a Hero in Another World",
    "Franklin and the Harsh Mistress. The Strange Journey of the Unwanted Brother.",
    "Rizzulai no Kami ni Mitsuya",
    "Trashbot and the Haunted School Girl.",
    "Solymar's Guide To Teyvat Adventures",
    "Tom and I Become the Demon Lord's Wants of Happiness",
    "Franklin: The Dark Knight Returns to a Ruined World",
    "Solymar's Magic Bullet Academy, Part 2",
    "Katelyn's a Fool and a Bear! The Tale of the Sixteen",
    "Tom: An Explosion on My Way to a Friend's Diner",
    "Ben's Contract with God and His Girlfriends, which begins with the destruction of the world",
    "Katelyn’s Lover Is Not Your Mom!",
    "Re:Tom − Starting Life with Rem in Another World",
    "Ian-kun! Another World War II Bonus Story!",
    "Tom Wants to Make Your Husband Happy Again",
    "Ben The Malding Gamer: How to live while taking Ls",
    "Solymar's Contract with the Demon Lord",
    "Benjutsu no Taisen: Master of the Labyrinth",
    "Franklin, Get Off League: The Untold Tradegy",
    "Solymar the Rascal of the Holy Land",
    "Drake is Dead, So I Am Dead! Part 2: Reunion with Otome",
    "Franklin's Quest for the Withering Angel",
    "Ian: Let's Play with My Little Sister?!!"
]

//for storing
var previouslyUsedTitleIndices = []
var previouslyUsedAdminTitlesIndices = []
var displayNovels = []

//functions (for front-back end interaction)
function addUsedIndices(id){
    var inputIndex
    if(id == "regular"){
        //console.log("regular button")
        inputIndex = Number(document.getElementById("userInput").value)
        db.addPreviouslyUsedTitles(inputIndex)
    }
    else if(id == "admin"){
        //console.log("admin button")
        inputIndex = Number(document.getElementById("userInput").value)
        db.addpreviouslyAdminTitles(inputIndex)
    }
}

function clearList(){
    displayNovels = []
    document.getElementById("displayList").innerHTML = "<br><br><br><br><br><br>"
    //console.log("clear was called")
}

function randomizeNormal(){
    db.pickTitles(lightNovelTitles, 3)
}
function randomizeAdmin(){
    db.pickTitles(adminNovelTitles, 3)
}

// function init(){
//     db = new trashbotSelection()
// }

function debugConsole(){
    console.log("Previously Selected Titles")
    console.log(previouslyUsedTitleIndices)
    console.log("Previously Selected Admin Titles")
    console.log(previouslyUsedAdminTitlesIndices)
}