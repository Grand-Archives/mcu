/* Content for the en page (English). To add a language, copy this file to site/i18n/<code>/data.js and translate every text.
 * Do NOT translate or change: ids (object keys, "id", "ids", "phases", [[id|...]] targets), numbers/years/minutes, type codes, URLs.
 *
 * Inline links inside any text: [[id|shown text]] opens the profile "id"; [[t:id|shown text]] opens the title "id".
 *
 * titles      id -> { title, original (original title), year, type, phase, description (one-line summary), consequence
 *                     (what changes afterwards, or the release date when upcoming), upcoming (only when not released yet), summary [paragraphs] }
 *             type: f = film, s = series, e = special, x = Fox X-Men film. Titles are listed in watching order.
 * watch       short = ids of the short selection; list = the Disney+ list { id, minutes, why, name (optional display name) }
 * sagas       { id, name, years, phases (ids of the phases it holds), text [paragraphs] }
 * phases      id -> { name, short (3-4 letter tag used in the list), subtitle, years, aside (only for the phase outside the MCU), text [paragraphs], keep [bullets] }
 * doomsday    the "before Doomsday" section: intro, fronts {title,text[]}, trailers {when,text}, cast {group,ids[]}, questions[], dateNote, facts[], universes[]
 * profiles    type: p = character, e = group, l = place, o = object, c = concept; group = heading inside the list;
 *             now = current situation; inDoomsday = is in the Doomsday cast; facts = {label,value} rows (objects only);
 *             appearances = title id -> what it does there ("" = appears without a note). Keys must be title ids.
 * sources     links shown in the footer: { label, url } entries
 */
export default {
  "titles": {
    "xmen1": {
      "title": "X-Men",
      "original": "X-Men",
      "year": 2000,
      "type": "x",
      "phase": 0,
      "description": "In a world that fears mutants, Professor Charles Xavier runs a school and a team, the X-Men. Wolverine and Rogue find their way to it just as Magneto sets a plan in motion.",
      "consequence": "This is the universe that the Professor X, Magneto, Cyclops and Mystique cast for Doomsday come from.",
      "summary": [
        "The film opens in 1944, in a concentration camp in Poland. A boy torn from his parents bends the metal gates with his mind until the guards knock him down. He is Erik Lehnsherr, who as an adult will call himself Magneto.",
        "In the present, Senator Robert Kelly pushes a law that would force mutants to register. In Mississippi, 17-year-old Marie puts her boyfriend in a coma with a kiss: she absorbs the life force and powers of anyone she touches. She starts calling herself Rogue and runs away to Canada, where she meets Logan, Wolverine, a bar fighter who heals from any wound, has metal claws and doesn't remember his own past. Attacked by one of Magneto's henchmen, the two are rescued by Cyclops and Storm and taken to Charles Xavier's school, near New York.",
        "Magneto kidnaps the senator and puts him through a machine that causes mutations. Kelly escapes with new powers, reaches the school and, before dying, lets Xavier read in his mind what he saw. His body can't take the mutation and dissolves into water. Meanwhile Mystique, Magneto's shapeshifter, sabotages Cerebro, the machine Xavier uses to locate mutants, and he falls into a coma. Magneto captures Rogue: she was the one he wanted from the start.",
        "The machine drains the life of whoever powers it. The plan is to pass its power to Rogue, who would die in his place, and to turn every head of state gathered at a summit on Ellis Island into a mutant. The X-Men storm the Statue of Liberty. Cyclops knocks Magneto down, Logan destroys the machine and touches Rogue so she absorbs his healing, leaving himself on the brink of death.",
        "Xavier recovers and gives Logan a lead on his past, an abandoned military base in Canada. Mystique got away and takes the senator's place. Magneto is in a plastic prison, where Xavier visits him. He promises to escape and carry on the fight; Xavier promises to be there to stop him."
      ]
    },
    "xmen2": {
      "title": "X2",
      "original": "X2",
      "year": 2003,
      "type": "x",
      "phase": 0,
      "description": "After a mutant attack on the President of the United States, Colonel William Stryker raids Xavier's school. The X-Men and Magneto are forced to team up.",
      "consequence": "Introduces Nightcrawler and the program that gave Wolverine his adamantium skeleton. Jean Grey sacrifices herself for the team.",
      "summary": [
        "Nightcrawler, a teleporting mutant, breaks into the White House and nearly kills the President. The attack gives Colonel William Stryker the authorization he wanted to investigate Xavier's school. His troops storm the mansion at night and take students away. Wolverine escapes with Rogue, Iceman and Pyro; Stryker calls him by name, showing he knows his past. Xavier and Cyclops are captured when they visit Magneto in prison.",
        "Mystique helps Magneto escape and steals the Cerebro blueprints. When fighter jets shoot down the X-Men's jet, it is Magneto who saves them, and the two sides join forces. He explains Stryker's plan: he built a second Cerebro and will force Xavier to use it to kill every mutant on the planet at once. To do it he uses his own son, Jason, a mind-controlling mutant he keeps lobotomized. It was Stryker, too, who coated Wolverine's skeleton in adamantium, which cost him his memory.",
        "The base is inside a dam, at Alkali Lake. Mystique walks in disguised as Wolverine and opens the doors. Jean Grey faces a mind-controlled Cyclops and frees him, but the fight cracks the dam. Wolverine kills Stryker's assistant, who has claws like his, and chains the colonel up. Magneto reaches Cerebro first, reverses the command so that Xavier kills all humans, and leaves by helicopter with Mystique and Pyro, who switches sides. Storm and Nightcrawler enter the machine and break Jason's concentration, freeing Xavier.",
        "The dam bursts, and Stryker dies in the flood. The X-Men's jet can't take off. Jean steps out of the jet, holds back the water and lifts the jet with her mind, until the wave covers her. The X-Men hand Stryker's files to the President. In the last shot, the shape of a firebird rises from the lake, a promise of the Phoenix."
      ]
    },
    "hf1": {
      "title": "Iron Man",
      "original": "Iron Man",
      "year": 2008,
      "type": "f",
      "phase": 1,
      "description": "Billionaire weapons maker Tony Stark is kidnapped in Afghanistan and builds an armored suit to escape. Back home, he decides to use the technology to fix the damage his own weapons have done.",
      "consequence": "Stark tells the world he is Iron Man, and Nick Fury shows up to talk about the Avengers Initiative.",
      "summary": [
        "Tony Stark, head of the largest weapons manufacturer in the United States, goes to Afghanistan with his friend James Rhodes, an Air Force officer, to demonstrate a new missile. On the way back, the convoy is attacked by a group called the Ten Rings, and Stark is wounded by shrapnel from a bomb made by his own company. He wakes up in a cave. Another prisoner, the doctor Ho Yinsen, has put an electromagnet in his chest that keeps the shrapnel from reaching his heart.",
        "The group's leader, Raza, promises to free him if he builds the missile. Stark and Yinsen pretend to obey and secretly build a miniature power source, the arc reactor, and an armored suit. Discovered before they are ready, Yinsen sacrifices himself to buy time. Stark fights his way out, destroys the arsenal, takes off and crashes in the desert, where Rhodes finds him.",
        "Back home, he announces that the company will stop making weapons. Obadiah Stane, his father's partner, warns him that this will bankrupt the company. Stark locks himself in the workshop and builds a better suit and a stronger reactor. When he learns that his weapons are being used against Yinsen's village, he flies there and saves the villagers.",
        "Stane is the one selling weapons to the Ten Rings and the one who ordered Stark's death. He kills Raza, recovers the remains of the first suit and builds a giant one. Since his scientists can't copy the reactor, he breaks into Stark's house and rips out the one in his chest. Stark survives with the old reactor, which his assistant Pepper Potts had kept in a glass case. Pepper finds the betrayal in the company's files and alerts Agent Phil Coulson of S.H.I.E.L.D. In the final fight, on the factory roof, Stark has Pepper overload the building's reactor, and the discharge kills Stane.",
        "S.H.I.E.L.D. prepares a cover story for the press. Stark ignores it and says into the microphone that he is Iron Man. After the credits, Director Nick Fury is waiting for him at home to tell him he has entered a bigger universe and to talk about the Avengers Initiative."
      ]
    },
    "hulk": {
      "title": "The Incredible Hulk",
      "original": "The Incredible Hulk",
      "year": 2008,
      "type": "f",
      "phase": 1,
      "description": "Scientist Bruce Banner lives in hiding, searching for a cure for the condition that turns him into a green monster when he gets angry. General Ross wants to capture him to use the Hulk as a weapon.",
      "consequence": "Introduces General Ross and the scientist Samuel Sterns, who only matter again in Captain America: Brave New World, 17 years later.",
      "summary": [
        "General Thaddeus Ross tries to revive the World War II super-soldier program and presents the research to the scientist Bruce Banner, his daughter Betty's boyfriend, as a study on resistance to gamma radiation. Banner tests it on himself. The experiment fails, and he begins to turn into the Hulk when he gets angry or when his heart rate goes over 200 beats per minute. The first time, he destroys the lab and injures Betty and the general. He becomes a fugitive.",
        "Five years later, he works in a soda factory in Rio de Janeiro. He has gone five months without transforming, practices breathing exercises and trades messages with an anonymous researcher, Mr. Blue, in search of a cure. A cut on his finger drops a drop of blood into a bottle, and a consumer in the United States falls ill. Ross traces the bottle and sends a team led by Emil Blonsky. The Hulk destroys it. Blonsky survives and volunteers to receive a version of the serum.",
        "Banner returns to the United States and meets Betty again. Ross surrounds him at the university; Blonsky, now stronger, provokes the Hulk and nearly dies. The Hulk shields Betty from the gunfire and runs off with her. Mr. Blue is Samuel Sterns, a biologist from New York, who has a possible antidote. It seems to work. But Sterns has multiplied Banner's blood samples for research, and Banner wants everything destroyed.",
        "Ross captures Banner. Blonsky stays behind and forces Sterns to inject him with the Hulk's blood. He becomes the Abomination, bigger and stronger, and wrecks Harlem. In the chaos, contaminated blood drips into a cut on Sterns's forehead, and his head starts to change. Banner convinces Ross to release him, leaps from the helicopter and transforms. He nearly strangles the Abomination with a chain and spares him at Betty's request.",
        "A month later, in Canada, Banner trains to trigger the transformation by choice. In the last scene, Tony Stark looks for Ross in a bar and tells him they are putting a team together."
      ]
    },
    "hf2": {
      "title": "Iron Man 2",
      "original": "Iron Man 2",
      "year": 2010,
      "type": "f",
      "phase": 1,
      "description": "With the world knowing who he is, Stark faces government pressure to hand over the armor, an industrial rival and the son of one of his father's old partners. At the same time, the reactor keeping him alive is poisoning him.",
      "consequence": "Introduces Natasha Romanoff, Black Widow, and James Rhodes's armor, War Machine.",
      "summary": [
        "In Russia, Ivan Vanko watches his father die in poverty. Anton Vanko worked with Howard Stark on inventing the arc reactor, tried to sell it, was deported and sent to a forced-labor camp. Ivan builds a reactor of his own from the old blueprints.",
        "Six months after revealing his identity, Tony Stark reopens his father's technology expo and refuses to hand the armor over to the government, which pressures him alongside Justin Hammer, a rival weapons maker. What nobody knows is that the palladium in the reactor is poisoning his blood, and he can't find a substitute. Believing he is going to die, he makes Pepper Potts the company's CEO and hires a new assistant, Natalie Rushman.",
        "At the Monaco Grand Prix, Vanko attacks Stark with electric whips. He is arrested and says he only wanted to prove that Iron Man bleeds. Hammer fakes his death in jail and hires him to build armors; Vanko prefers drones, with no pilots. At the birthday party, Stark gets drunk in the armor, and Rhodes puts on another suit to restrain him. The two fight, and Rhodes takes the armor to the Air Force.",
        "Nick Fury appears. Natalie is Agent Natasha Romanoff of S.H.I.E.L.D., the agency Howard Stark helped found. Fury hands Tony material his father left behind, and in a model of the 1974 expo he finds the structure of a new element, which he synthesizes and puts in place of the palladium.",
        "At the expo, Hammer unveils the drones, led by Rhodes in an armor armed to the teeth, War Machine. Vanko takes remote control of all of them and attacks. Natasha breaks into Hammer's factory and gives Rhodes back control of the armor. Stark and Rhodes defeat Vanko, who blows himself and the drones up. Fury concludes that Stark is too unstable and accepts him only as a consultant. After the credits, Coulson finds a hammer in a crater in New Mexico."
      ]
    },
    "thor": {
      "title": "Thor",
      "original": "Thor",
      "year": 2011,
      "type": "f",
      "phase": 1,
      "description": "Thor, the arrogant heir to the throne of Asgard, is exiled to Earth without his powers by his father, Odin. While he learns humility, his brother Loki schemes to take the throne.",
      "consequence": "Loki learns he is adopted and falls into space. He comes back as the villain of The Avengers.",
      "summary": [
        "In the year 965, Odin, king of Asgard, defeats the frost giants of Jotunheim and takes the source of their power. In the present, his son Thor is about to be crowned when giants break into the palace vault. Against his father's order, Thor takes his brother Loki and his warrior friends to Jotunheim and starts a fight that breaks the truce. Odin has to rescue them. Furious, he strips Thor of his powers, declares him unworthy and exiles him to Earth. The hammer Mjolnir falls with him, under an enchantment: only the worthy will lift it.",
        "Thor lands in New Mexico and is hit by a car driven by the astrophysicist Jane Foster, who is studying the phenomenon with her intern Darcy and Professor Erik Selvig. S.H.I.E.L.D., with Agent Coulson, seals off the hammer and confiscates the research. Thor breaks into the camp, tries to lift the hammer and can't. Locked up and then released with Selvig's help, he agrees to stay on Earth and grows closer to Jane.",
        "In Asgard, Loki discovers he is the son of the king of the giants, taken in as a baby by Odin after the war. Odin falls into a deep sleep, and Loki takes the throne. It was he who let the giants into the vault. Now he offers their king the chance to kill Odin. Thor's friends convince Heimdall, the guardian of the Bifrost bridge, to send them to Earth. Loki sends the Destroyer, a living suit of armor, after them.",
        "Powerless, Thor offers himself to the Destroyer in place of his friends and is mortally wounded. The gesture makes him worthy: the hammer flies to him. He destroys the armor, says goodbye to Jane and returns. Loki kills the king of the giants to pose as a savior and aims the Bifrost at Jotunheim to destroy it. Thor breaks the bridge with the hammer, knowing it will separate him from Jane. Odin wakes and holds on to both sons at the edge of the abyss. Rejected by his father, Loki lets go.",
        "After the credits, Fury shows Selvig an energy cube and asks him to study it. Loki, alive and invisible, whispers for him to accept."
      ]
    },
    "cap1": {
      "title": "Captain America: The First Avenger",
      "original": "Captain America: The First Avenger",
      "year": 2011,
      "type": "f",
      "phase": 1,
      "description": "In 1942, the scrawny Steve Rogers receives the super-soldier serum and becomes Captain America. He takes on Hydra, the Nazi science division led by the Red Skull, which has found a cube of immense power.",
      "consequence": "Steve is frozen for almost 70 years and loses the life he would have had with Peggy Carter. The cube, the Tesseract, is the first Infinity Stone to appear.",
      "summary": [
        "In March 1942, the Nazi officer Johann Schmidt, head of the Hydra science division, steals the Tesseract, a cube of immense power, from a town in Norway. In New York, Steve Rogers, small and sickly, is rejected by the Army several times. At a Howard Stark tech expo, the scientist Abraham Erskine overhears him tell his friend Bucky Barnes why he wants to fight and accepts him into a secret program.",
        "The program aims to create a super-soldier. Steve convinces the colonel in charge by throwing himself on a grenade during training. Erskine tells him he once worked for Schmidt, who took an early version of the serum: he came out strong and deformed. The serum amplifies what a person already is. Steve receives the formula and steps out of the chamber tall and strong. Minutes later, a Hydra agent kills Erskine and escapes with the last vial. Steve catches up to him, the man kills himself, and the formula is lost.",
        "With no way to make more, the government uses Steve as a mascot, Captain America, in shows to sell war bonds. In Italy, in 1943, he learns that Bucky's battalion has been captured. With the help of Agent Peggy Carter and Stark, he parachutes behind the lines, frees hundreds of prisoners and finds Schmidt, who tears off his mask and reveals a skull face. Steve assembles a team with Bucky and the freed men, receives a vibranium shield and falls in love with Peggy.",
        "In 1945, the team attacks a train to capture Arnim Zola, Schmidt's scientist. Bucky falls into a ravine. With Zola's information, the Allies attack Hydra's last base. Schmidt takes off in a plane loaded with bombs meant for American cities, and Steve boards it. In the fight, Schmidt holds the Tesseract with his bare hands and is carried off through a portal. The cube falls into the sea. With no way to land away from people, Steve crashes the plane in the Arctic while setting a dance date with Peggy over the radio.",
        "Stark finds the Tesseract but not the plane. Steve wakes in a room with a radio broadcasting a 1941 game he attended, realizes it is a set-up and runs out to Times Square. Fury tells him he slept for almost seventy years."
      ]
    },
    "ving1": {
      "title": "The Avengers",
      "original": "The Avengers",
      "year": 2012,
      "type": "f",
      "phase": 1,
      "description": "Loki arrives on Earth with the Tesseract and an alien army. Nick Fury assembles Iron Man, Captain America, Thor, Hulk, Black Widow and Hawkeye, who have to learn to work together.",
      "consequence": "The Battle of New York shows the world that we are not alone. In the credits, Thanos appears, the one behind the invasion.",
      "summary": [
        "Loki, who fell from Asgard at the end of Thor, makes a deal with the emissary of an alien people, the Chitauri: he gets an army to conquer Earth in exchange for the Tesseract. The cube is at a S.H.I.E.L.D. base, where Professor Erik Selvig is studying it. It activates on its own and opens a portal, through which Loki arrives. With a scepter, Loki takes control of the minds of Selvig and Agent Clint Barton and escapes with the cube.",
        "Nick Fury reactivates the Avengers Initiative. Natasha Romanoff goes to India to get Bruce Banner, who can track the cube's radiation. Coulson looks for Tony Stark, and Fury for Steve Rogers. In Germany, Loki lets himself be captured by Rogers, Stark and Natasha. On the way, Thor shows up to take his brother away, fights the other two, and they all end up on the agency's flying carrier.",
        "Locked up in the same place, the heroes argue, under the influence of the scepter, and find out that S.H.I.E.L.D. intended to use the Tesseract to make weapons against threats from outside. Barton attacks the carrier with Loki's men. Banner becomes the Hulk and fights Thor. Stark and Rogers restart the engine. Natasha takes Barton down and frees him from the control. Loki escapes, mortally wounding Agent Coulson. Fury uses the death to give the team a common cause.",
        "Loki opens the portal at the top of Stark Tower, and the Chitauri invade Manhattan. The six fight together for the first time. The Hulk smashes Loki into the floor. A council that oversees S.H.I.E.L.D. fires a nuclear missile at the city. Stark intercepts it and carries it into the portal, where he destroys the mothership and shuts down the army. Stark falls unconscious and is caught by the Hulk. Natasha closes the portal with the scepter.",
        "Thor takes Loki and the Tesseract back to Asgard. In the credits scene, the emissary reports the defeat to his master, who turns to the camera: it is Thanos."
      ]
    },
    "hf3": {
      "title": "Iron Man 3",
      "original": "Iron Man 3",
      "year": 2013,
      "type": "f",
      "phase": 2,
      "description": "Shaken by the Battle of New York, Stark suffers anxiety attacks and builds suits nonstop. A terrorist called the Mandarin destroys his home, and he has to get by without his technology.",
      "consequence": "The Mandarin was a hired actor, Trevor Slattery, who reappears in Shang-Chi and the Legend of the Ten Rings and in Wonder Man.",
      "summary": [
        "In 1999, at a New Year's party, Tony Stark spends the night with the scientist Maya Hansen, who is researching a regenerative treatment called Extremis, and leaves a disabled researcher, Aldrich Killian, waiting on the roof; Killian wanted to propose a partnership.",
        "Thirteen years later, months after the Battle of New York, Stark has panic attacks, can't sleep and has already built dozens of suits, which strains his relationship with Pepper Potts. Bombings are claimed by a terrorist, the Mandarin. When Happy Hogan falls into a coma after an explosion, Stark challenges the Mandarin on TV and gives out his own address. Helicopters destroy the house. He escapes in an experimental suit that carries him, out of power, to rural Tennessee, and is presumed dead.",
        "There, helped by a boy, Harley, he investigates an old explosion. There was no bomb: it was a veteran whose body rejected Extremis. Killian's company uses the treatment on wounded soldiers, and the ones who fail explode. The bombings are the cover. Stark tracks the Mandarin to Miami and finds an English actor, Trevor Slattery, hired to give a face to a villain who doesn't exist.",
        "Killian captures Stark. He cured his own disability with Hansen's research, kidnapped Pepper and injected Extremis into her to force Stark to fix the flaws. He kills Hansen when she threatens to expose him. He steals Rhodes's armor and uses it to kidnap the President, whom he plans to kill live so that the Vice President, his ally, takes over.",
        "Stark and Rhodes storm an oil rig. Stark calls in all the suits by remote control. Pepper falls into the flames and survives thanks to the virus; she is the one who kills Killian. Stark orders the suits destroyed, stabilizes Pepper, has surgery to remove the shrapnel from his chest and throws the reactor into the sea."
      ]
    },
    "thor2": {
      "title": "Thor: The Dark World",
      "original": "Thor: The Dark World",
      "year": 2013,
      "type": "f",
      "phase": 2,
      "description": "The Dark Elves want to plunge the universe into darkness using the Aether, a force that ends up in Jane Foster's body. Thor has to ask for help from Loki, imprisoned in Asgard.",
      "consequence": "The Aether is the Reality Stone. Frigga, Thor's mother, dies. Loki takes the throne disguised as Odin.",
      "summary": [
        "Millennia ago, Thor's grandfather defeated the Dark Elves, led by Malekith, who wanted to cast the nine realms into darkness with a weapon called the Aether. Unable to destroy it, he hid it in an unreachable place. Malekith fled and went into hibernation.",
        "In the present, Loki is imprisoned in Asgard for his crimes on Earth, and Thor is pacifying the realms. The Convergence is approaching, a rare alignment of the nine worlds that opens passages between them. In London, Jane Foster crosses one of these passages, ends up where the Aether is kept, and it enters her body. Thor takes her to Asgard. Odin warns that the substance will kill her.",
        "The Aether awakens Malekith. He attacks the palace looking for Jane, and Frigga, mother of Thor and Loki, dies defending her. Odin wants to wait for the enemy to return. Thor disobeys: he frees Loki, the only one who knows a secret way out, and takes Jane to the world of the elves. The plan is to let Malekith draw the Aether out of her and destroy it outside her body. The first part works, the second doesn't. Malekith absorbs the weapon and leaves. Loki is run through by a blade saving his brother and dies in his arms.",
        "Malekith is going to unleash the Aether at Greenwich, the focal point of the Convergence. Thor fights him in a battle that crosses several worlds, while Jane and Selvig use devices to scramble the passages. Malekith is sent back to his world and crushed by his own ship.",
        "Thor turns down the throne to stay with Jane. The Odin who hears him is Loki, alive and disguised. In the credits scene, two Asgardians hand the Aether over to the Collector: since the Tesseract is already in Asgard, it is unwise to keep two Infinity Stones together. The Collector now wants the other five."
      ]
    },
    "cap2": {
      "title": "Captain America: The Winter Soldier",
      "original": "Captain America: The Winter Soldier",
      "year": 2014,
      "type": "f",
      "phase": 2,
      "description": "Steve Rogers works for S.H.I.E.L.D. in Washington and discovers a conspiracy inside the agency. The assassin sent to stop him is someone from his past.",
      "consequence": "S.H.I.E.L.D. is dismantled: Hydra had been infiltrating it for decades. Bucky Barnes is alive, and Sam Wilson enters the story.",
      "summary": [
        "Two years after the Battle of New York, Steve Rogers works for S.H.I.E.L.D. in Washington and befriends Sam Wilson, a former paratrooper who counsels veterans. On a mission aboard a hijacked ship, he finds out that Natasha Romanoff had another task: copying data for Nick Fury. Fury shows him Project Insight, three flying helicarriers linked to satellites, able to eliminate threats before they act. Steve doesn't like it.",
        "Fury can't open the data Natasha brought and asks a superior, Alexander Pierce, to delay the launch. The same day he is ambushed by a metal-armed gunman, the Winter Soldier. He reaches Steve's apartment wounded, hands over a flash drive, warns that the agency is compromised and is declared dead at the hospital. Pierce questions Steve, who says nothing and becomes a fugitive.",
        "Steve and Natasha follow the flash drive to a bunker in New Jersey. There the mind of Arnim Zola, a Hydra scientist, was preserved in old computers. Zola tells them that Hydra settled inside S.H.I.E.L.D. after the war and spent decades provoking crises. An algorithm of his identifies who might someday threaten it, and Insight will kill those people, millions of them, all at once. A missile destroys the bunker. Pierce is the boss.",
        "The two hide at Sam's house, where he keeps a pair of mechanical wings. In a chase, the Winter Soldier's mask falls off, and Steve recognizes Bucky Barnes. Maria Hill takes them to a living Fury, who has a plan: swap the helicarriers' chips.",
        "On launch day, Steve denounces Hydra over the loudspeakers at headquarters. Natasha and Fury force Pierce to release the files, and she dumps everything onto the internet, the secrets of S.H.I.E.L.D. and Hydra together. Fury kills Pierce. Steve and Sam swap the chips, and Steve, instead of fighting Bucky, drops his shield. The helicarriers fire on each other and crash into the headquarters. Bucky pulls Steve out of the river and disappears.",
        "S.H.I.E.L.D. is finished. Fury leaves to hunt what remains of Hydra, and Steve and Sam go after Bucky. In the credits, a Hydra officer examines Loki's scepter and two twins with powers; after that, Bucky visits the museum exhibit about himself."
      ]
    },
    "gg1": {
      "title": "Guardians of the Galaxy",
      "original": "Guardians of the Galaxy",
      "year": 2014,
      "type": "f",
      "phase": 2,
      "description": "Peter Quill, an Earthling raised by space pirates, steals an orb and becomes everyone's target. In prison, he teams up with Gamora, Drax, Rocket and Groot to stop the fanatic Ronan from destroying a planet.",
      "consequence": "The orb held the Power Stone. Thanos appears as the adoptive father of Gamora and Nebula.",
      "summary": [
        "In 1988, on the night his mother dies of cancer, young Peter Quill is abducted from Earth by a pirate ship, the Ravagers, led by Yondu. In 2014, grown up, he steals an orb on an abandoned planet and is attacked by soldiers of Ronan, a fanatic of the Kree people. He gets away. Yondu puts a bounty on his head, and Ronan sends Gamora, Thanos's adoptive daughter, to get the orb.",
        "On the planet Xandar, Gamora ambushes Quill, and two bounty hunters join the brawl: Rocket, a modified raccoon, and Groot, a humanoid tree. All four are arrested. In the prison is Drax, whose family Ronan killed and who wants to kill Gamora because of it. She reveals that she betrayed Ronan and has a buyer for the orb. The five escape together.",
        "The buyer is the Collector, who opens the orb and explains: inside is an Infinity Stone, one of six stones born with the universe. A servant touches it, and the explosion destroys the collection. Ronan arrives, defeats Drax and takes the orb. Gamora is left adrift in space by Nebula, her adoptive sister; Quill gives her his own helmet, and the two are picked up by Yondu.",
        "Ronan fits the Stone into his hammer and breaks with Thanos: he will destroy Xandar and then kill him. The five, knowing they will probably die, decide to stop him. They attack Ronan's ship with the Ravagers and the Xandar police. The ship crashes, and Groot wraps his friends in his own body, dying on impact.",
        "On the ground, Quill distracts Ronan by dancing while Rocket and Drax destroy the hammer. Quill grabs the Stone, which should disintegrate him. The others hold his hands, share the load, and together they blast Ronan to dust. Quill tricks Yondu with an empty orb and hands the real one over to Xandar. The group has its records wiped clean, and Quill finds out he is only half human. At last he opens his mother's final gift, a cassette tape. Rocket plants a twig from Groot, which sprouts."
      ]
    },
    "ving2": {
      "title": "Avengers: Age of Ultron",
      "original": "Avengers: Age of Ultron",
      "year": 2015,
      "type": "f",
      "phase": 2,
      "description": "Stark and Banner create Ultron, an artificial intelligence meant to protect the planet. Ultron concludes that the threat is humanity and tries to wipe it out.",
      "consequence": "Wanda Maximoff and Vision appear, carrying the Mind Stone. The destruction of Sokovia leads to the accords that split the team in Civil War.",
      "summary": [
        "The Avengers attack a Hydra base in Sokovia, in Eastern Europe, where Baron Strucker was experimenting on humans with Loki's scepter. Two results of those experiments face them: the twins Pietro, who runs faster than the eye can follow, and Wanda Maximoff, who messes with minds. Wanda shows Stark a vision of his teammates dead. The team takes the scepter.",
        "Stark finds that the scepter's gem contains something like an intelligence and, with Banner, without telling the others, uses it to complete Ultron, a planetary defense program. The program wakes up on its own, concludes that saving Earth requires eliminating humanity, destroys J.A.R.V.I.S., Stark's artificial intelligence, and attacks the team at a party. It escapes with the scepter, builds a robot army, kills Strucker and recruits the twins, who blame Stark for the bombs that killed their parents.",
        "Ultron buys vibranium from a dealer in South Africa. In the confrontation, Wanda enchants the team, and the Hulk wrecks a city until Stark stops him with an armor built for that purpose. With public opinion against them, the Avengers hide at Clint Barton's farm, where they meet his family. Thor leaves to understand a vision he had. Fury shows up to give them direction.",
        "In Seoul, Ultron forces a scientist to build him a body of synthetic tissue and vibranium, with the scepter's gem on its forehead. When he transfers into it, Wanda reads his mind, sees the extinction plan and switches sides with her brother. The Avengers steal the body. Stark and Banner upload what was left of J.A.R.V.I.S. into it, and Thor, who understood from his vision that the gem is one of the Infinity Stones, delivers the final jolt. Vision is born, and wins everyone's trust by lifting Thor's hammer.",
        "Ultron rips the capital of Sokovia out of the ground to drop it like a meteor. The Avengers evacuate the residents, with Fury and an old S.H.I.E.L.D. carrier. Pietro dies shielding Clint and a boy. Stark and Thor blow the city up in the air. Vision destroys Ultron's last body. The Hulk leaves in a jet, away from Natasha.",
        "The team gets a new base. Thor returns to Asgard, Stark steps away, Clint retires. Steve and Natasha start training Rhodes, Vision, Sam Wilson and Wanda. In the credits, Thanos puts on a gauntlet and decides to go after the Stones himself."
      ]
    },
    "hformiga": {
      "title": "Ant-Man",
      "original": "Ant-Man",
      "year": 2015,
      "type": "f",
      "phase": 2,
      "description": "The thief Scott Lang gets out of prison and is recruited by the scientist Hank Pym to wear a suit that shrinks and to steal that same technology from the man who wants to sell it as a weapon.",
      "consequence": "Introduces the Quantum Realm, which will be the key to time travel in Endgame.",
      "summary": [
        "In 1989, the scientist Hank Pym leaves S.H.I.E.L.D. on finding out the agency was trying to copy his shrinking technology, and swears to hide it. In the present, he has been pushed out of his own company by his daughter, Hope, and his former protégé, Darren Cross, who is close to recreating the formula in a war suit, the Yellowjacket.",
        "Scott Lang leaves prison, where he served time for breaking into the company that was cheating customers and returning the money to them. Jobless because of his record, he can't pay child support or see his daughter, Cassie. He accepts a heist proposed by his friend Luis: a house with an old safe. Inside the safe there is only a suit. When he puts it on, he shrinks. Frightened, he returns it and is arrested. The house belonged to Pym, who set it all up as a test and gets him out of the cell.",
        "Pym wants Scott to steal the Yellowjacket. Hope, who was spying on Cross at her father's request, trains Scott and resents not being the one to wear the suit. Pym tells him why: her mother, Janet, the original Wasp, shrank without stopping to get into a Soviet missile in 1987 and was lost in the Quantum Realm, from which no one returns. On a preparatory mission to the Avengers' base, Scott fights Sam Wilson.",
        "On the day of the unveiling, Scott breaks into the building with Luis's crew and an army of ants. Cross was expecting them and plans to sell the suits to Hydra. In the chaos, Pym is shot, the building explodes, and Cross puts on the Yellowjacket and takes Cassie hostage. To get into his suit, Scott shrinks past the limit, sabotages it from the inside and keeps shrinking until he reaches the Quantum Realm. He manages to come back.",
        "The police officer dating Cassie's mother covers for Scott. Pym comes to believe Janet may be alive. In the credits, he shows Hope a Wasp suit; after that, Steve and Sam, with Bucky in custody and unable to call Stark, think of someone who might help."
      ]
    },
    "gcivil": {
      "title": "Captain America: Civil War",
      "original": "Captain America: Civil War",
      "year": 2016,
      "type": "f",
      "phase": 3,
      "description": "After yet another mission with civilian casualties, governments want the Avengers under UN control. Stark accepts, Rogers refuses, and the return of Bucky Barnes turns the disagreement into a fight.",
      "consequence": "The Avengers split up. Black Panther and Spider-Man make their debut.",
      "summary": [
        "In 1991, the Winter Soldier is sent from a base in Siberia to intercept a car carrying super-soldier serum. In the present, a year after Ultron, Steve, Natasha, Sam and Wanda stop the theft of a biological weapon in Lagos. The villain blows himself up; Wanda deflects the blast, which hits a building and kills volunteers from Wakanda.",
        "Secretary of State Thaddeus Ross presents the Sokovia Accords: the Avengers would act under a UN panel. Stark, shaken by what he caused with Ultron, supports them. Steve, who doesn't trust those who would decide, refuses. At the signing ceremony in Vienna, a bomb kills King T'Chaka of Wakanda. The cameras show Bucky Barnes, and Prince T'Challa swears to kill him.",
        "Agent Sharon Carter warns Steve that the order is to shoot to kill. He and Sam find Bucky in Bucharest before the police do, and all of them are arrested, T'Challa included. The real author of the bombing is Helmut Zemo, a Sokovian colonel who stole the notebook with the Winter Soldier's activation words. Posing as a psychiatrist, he recites them, frees Bucky and escapes. Recovered, Bucky tells them what Zemo wanted to know: the location of the Siberian base, where five other soldiers like him lie frozen.",
        "Steve gathers Sam, Bucky, Wanda, Clint Barton and Scott Lang to go to Siberia. Stark, with Natasha, Rhodes, Vision, T'Challa and a newly recruited Peter Parker, tries to stop them at an airport in Germany. In the fight, Vision hits Rhodes by mistake, and he is left partly paralyzed. Natasha lets Steve and Bucky escape. The rest of Steve's team is locked up in the Raft.",
        "Stark finds out that Bucky was framed and follows the two as an ally, not knowing T'Challa is coming after them. At the base, Zemo has already killed the other soldiers. He only wanted to show a video: in 1991, the Winter Soldier killed Tony's parents. Steve knew. Tony tries to kill Bucky; Steve defeats him and drops his shield. Zemo, satisfied, is about to kill himself, and T'Challa stops him and turns him over to justice.",
        "Stark gives Rhodes a device to walk again. Steve breaks his friends out of prison and sends Tony a cell phone. In the credits, Bucky is granted asylum in Wakanda and asks to be frozen until there is a cure; after that, Peter studies the gear he received."
      ]
    },
    "estranho": {
      "title": "Doctor Strange",
      "original": "Doctor Strange",
      "year": 2016,
      "type": "f",
      "phase": 3,
      "description": "The surgeon Stephen Strange loses the use of his hands in an accident and, looking for a cure, finds a monastery that teaches magic. He learns that Earth is protected from threats from other dimensions.",
      "consequence": "The Eye of Agamotto holds the Time Stone.",
      "summary": [
        "In Kathmandu, Kaecilius and his followers break into the sanctuary of Kamar-Taj, kill the librarian and steal pages from a book belonging to the Ancient One, the master who trained him. In New York, Stephen Strange, a rich and arrogant neurosurgeon, wrecks his hands in a car accident. His colleague Christine Palmer insists he move on with his life. He spends everything on experimental surgeries, to no avail.",
        "He hears of a paraplegic man who walked again and who points him to Kamar-Taj. The sorcerer Mordo takes him in. The Ancient One shows him the astral plane and other dimensions and reluctantly agrees to train him, seeing in him Kaecilius's ambition. Strange studies with Mordo and with Wong, the library's new keeper. He learns that three Sanctums, in New York, London and Hong Kong, sustain a shield that protects Earth, and he discovers in the stolen book how to bend time with a relic, the Eye of Agamotto.",
        "Kaecilius uses the pages to contact Dormammu, lord of the Dark Dimension, where time does not exist. He destroys the London Sanctum and attacks the New York one. Strange holds him off with the help of a flying cloak and is gravely wounded; Christine operates on him. He finds out the Ancient One herself prolongs her life by drawing power from the Dark Dimension, which disillusions Mordo. In a fight, Kaecilius mortally wounds her. Before dying, she tells them they need each other: Mordo follows rules, Strange bends them.",
        "In Hong Kong, the Sanctum has already fallen, Wong is dead and the Dark Dimension is swallowing the city. Strange rewinds time with the Eye and enters the dimension alone. He creates a loop: every time Dormammu kills him, the moment starts over. Trapped in an endless repetition, Dormammu agrees to leave and take Kaecilius with him.",
        "Mordo, disgusted by the breaking of natural laws, leaves the order. Strange returns the Eye, which Wong reveals to be an Infinity Stone, and settles into the New York Sanctum. In the credits, he offers Thor help finding Odin; after that, Mordo takes the power of the healed paraplegic man and declares that there are too many sorcerers."
      ]
    },
    "gg2": {
      "title": "Guardians of the Galaxy Vol. 2",
      "original": "Guardians of the Galaxy Vol. 2",
      "year": 2017,
      "type": "f",
      "phase": 3,
      "description": "The Guardians meet Ego, who claims to be Peter Quill's father. The family reunion hides a plan for the entire universe.",
      "consequence": "Quill loses his adoptive father, Yondu. Mantis joins the team.",
      "summary": [
        "The Guardians are hired by the Sovereign, a golden and vain people, to protect some valuable batteries. In return they receive Nebula, caught trying to steal them. Rocket steals a few. The Sovereign fleet chases them and is destroyed by a stranger. It is Ego, Peter Quill's father. He takes Quill, Gamora and Drax to his planet, where he lives with Mantis, a servant who senses other people's emotions. Rocket and Groot stay behind repairing the ship and guarding Nebula.",
        "The Sovereign hire Yondu to capture them. Yondu, expelled from the brotherhood of the Ravagers for trafficking children, catches Rocket but hesitates to hand over Quill, the boy he raised. The crew mutinies, with help from Nebula, and executes the loyalists. Nebula leaves to kill her sister. Yondu and Rocket escape with the help of Groot and a repentant crewman, and the ship explodes.",
        "Ego explains that he is a Celestial: an ancient consciousness that built a whole planet and a human body around itself to explore the universe. He fell in love with Quill's mother and paid Yondu to fetch the boy when she died. Yondu never delivered him. Ego teaches his son to use the Celestial power. Nebula arrives, fights Gamora, and the two end up saying what they never said: every time she lost a duel to her sister, Thanos replaced a part of Nebula with machinery. Together they find a cave full of bones.",
        "Ego reveals his plan. He planted seedlings of himself on thousands of worlds to turn everything into an extension of himself, and he needs a second Celestial to activate them. He fathered children on several planets, had Yondu collect them and killed the ones who didn't inherit the gift. And it was he who put the tumor in the head of Quill's mother, so he wouldn't be tied to Earth. Quill shoots him. Ego traps him and drains his energy.",
        "The others arrive. Rocket builds a bomb from the batteries, and Groot carries it to the planet's core. Quill holds his father off by fighting with the same power. The bomb kills Ego and, with him, Quill's power. Yondu pulls Quill off the collapsing planet and gives him the only space suit, dying in the vacuum after telling him that he was the real father. The Ravagers come to the funeral. Nebula leaves to kill Thanos. In the credits, the Sovereign high priestess creates a being to hunt the Guardians and calls him Adam."
      ]
    },
    "aranha1": {
      "title": "Spider-Man: Homecoming",
      "original": "Spider-Man: Homecoming",
      "year": 2017,
      "type": "f",
      "phase": 3,
      "description": "After fighting beside Stark, 15-year-old Peter Parker goes back to school wanting to prove he deserves to be an Avenger. He investigates an arms dealer whose weapons are made from alien scrap.",
      "consequence": "Peter turns down the spot on the Avengers to keep being the neighborhood hero.",
      "summary": [
        "After the Battle of New York, Adrian Toomes's cleanup company loses its contract to the Department of Damage Control, a body Tony Stark created with the government. Toomes keeps the alien scrap he had already collected and spends eight years making and selling weapons from it, including a winged suit for himself.",
        "Fifteen-year-old Peter Parker returns from the airport fight with a new suit and Stark's advice to stay in the neighborhood. He quits the school's academic decathlon team to devote himself to Spider-Man. His friend Ned finds out his identity. Peter catches a sale of Toomes's weapons, is thrown into a lake and saved by a Stark armor, which tells him to back off. He and Ned disable the suit's tracker.",
        "Peter rejoins the decathlon only to follow the criminals to Washington. He gets trapped in a warehouse, loses the competition and finds out that the piece Ned was holding on to is a grenade. It explodes at the Washington Monument and traps the team in an elevator; Peter saves everyone, among them Liz, the girl he likes. Days later, he tries to arrest a buyer on a ferry. A faulty weapon splits the boat in half. Stark saves him and takes the suit back.",
        "Peter asks Liz to the dance. The one who opens the door is Toomes, her father. In the car, Toomes figures out who he is and threatens him. Peter leaves the dance, puts on his homemade suit and goes after him: Toomes is going to rob a plane carrying Avengers equipment to the new base. Toomes drops a warehouse on him, and Peter lifts himself up from under the concrete. He brings the plane down on the beach and, when Toomes's suit explodes, pulls him out of the fire.",
        "Toomes is arrested, and Liz moves away. Stark offers a spot on the Avengers and a better suit; Peter refuses. At home, he puts on the returned suit and is seen by Aunt May. In the credits, in jail, Toomes denies knowing who Spider-Man is."
      ]
    },
    "ragnarok": {
      "title": "Thor: Ragnarok",
      "original": "Thor: Ragnarok",
      "year": 2017,
      "type": "f",
      "phase": 3,
      "description": "Hela, goddess of death and a sister Thor never knew, takes Asgard. Thor ends up on a garbage-dump planet where he is forced to fight the Hulk in an arena.",
      "consequence": "Odin dies, Asgard is destroyed and Thor loses his hammer and an eye. The survivors set off in a ship.",
      "summary": [
        "Two years after Sokovia, Thor is imprisoned by the fire demon Surtur, who tells him that Odin is not in Asgard and that the realm will fall at Ragnarok when his crown is joined to the eternal flame in the vault. Thor defeats him and takes the crown. In Asgard, he finds Loki on the throne, disguised as Odin, and forces him to show where he left their father.",
        "With the help of Stephen Strange, they find Odin in Norway, dying. He tells them he has a firstborn daughter, Hela, goddess of death, who led his armies in the conquest of the nine realms. When he wanted peace and she didn't, he imprisoned her and erased her from history. The prison depended on his life. Odin dies, Hela appears and crushes Mjolnir with one hand. In the escape across the Bifrost bridge, she knocks both brothers into space.",
        "Hela takes Asgard, kills Thor's friends, resurrects her army of the dead and names an executioner. She wants to use the Bifrost to resume the conquest, but Heimdall makes off with the sword that controls it and hides the people. Thor falls on Sakaar, a scrap planet surrounded by portals. He is captured by a drunken mercenary, whom he recognizes as the last of the Valkyries, a troop Hela massacred, and sold to the Grandmaster, whom Loki already serves.",
        "In the arena, the champion is the Hulk, who has been transformed for two years. Thor almost wins, and the Grandmaster cheats. Afterward, a recording of Natasha makes the Hulk turn back into Banner. The Valkyrie agrees to help. Loki shows how to steal a ship and tries to betray his brother, who was expecting it. The gladiators rebel.",
        "In Asgard, Hela tears out Thor's right eye. In a vision, Odin tells him that the hammer was only a channel, and that Asgard is its people, not a place. Thor sends lightning through his body. Since Hela draws strength from the realm, only Ragnarok can stop her: Loki puts Surtur's crown in the flame, and the demon destroys Asgard with her inside it. The people set off in a ship, with Thor as king, on their way to Earth. In the credits, an enormous ship looms ahead."
      ]
    },
    "pantera": {
      "title": "Black Panther",
      "original": "Black Panther",
      "year": 2018,
      "type": "f",
      "phase": 3,
      "description": "T'Challa takes the throne of Wakanda, an African country that hides its vibranium-based technology from the world. A challenger with a claim to the throne questions whether the isolation is fair.",
      "consequence": "Wakanda opens up to the world.",
      "summary": [
        "Thousands of years ago, five African tribes fought over a vibranium meteorite. A warrior ate a heart-shaped herb, altered by the metal, gained superhuman strength, became the first Black Panther and united four tribes into Wakanda. The fifth, the Jabari, stayed in the mountains. With vibranium, the country developed the most advanced technology in the world and hid it, pretending to be poor.",
        "In 1992, King T'Chaka visited his brother N'Jobu in Oakland, a Wakandan spy who had started helping the arms dealer Ulysses Klaue steal vibranium, to arm Black Americans. T'Chaka killed him and left his son, a boy, behind.",
        "In the present, T'Challa returns to be crowned after his father's death. He wins the challenge of M'Baku, chief of the Jabari, and spares him. He pursues Klaue in South Korea with the general Okoye and the spy Nakia, his ex-girlfriend, and captures him. Klaue is rescued by Erik Stevens, a former American elite soldier nicknamed Killmonger. A CIA agent, Everett Ross, is shot, and T'Challa takes him to Wakanda to be healed by Shuri, his sister.",
        "Erik kills Klaue and hands the body to the elders as a credential. He is N'Jadaka, the boy from Oakland. He challenges T'Challa, kills the priest who tries to stop him and throws his cousin off a waterfall. Crowned, he takes the herb, orders the rest burned and orders vibranium weapons shipped to agents around the world.",
        "Nakia saves one herb and flees with Shuri, Queen Ramonda and Ross to the mountains, where the Jabari found T'Challa in a coma. The herb heals him. He returns to finish the fight. Okoye and the royal guard face Killmonger's allies; Ross brings down the planes with the weapons. In the mine, T'Challa mortally wounds his cousin and offers him a cure. Killmonger refuses, preferring to die free, and asks to see the Wakandan sunset.",
        "T'Challa concludes that the isolation was a mistake. He opens an outreach center in the building where his uncle died and, in the credits scene, announces at the UN that Wakanda will share what it knows. After that, Shuri wakes Bucky Barnes, cured."
      ]
    },
    "ginfinita": {
      "title": "Avengers: Infinity War",
      "original": "Avengers: Infinity War",
      "year": 2018,
      "type": "f",
      "phase": 3,
      "description": "Thanos goes in search of the six Infinity Stones to wipe out half of all life in the universe with a snap of his fingers. The Avengers and the Guardians try to stop him on several fronts.",
      "consequence": "Thanos wins. Half of all living beings turn to dust, including Peter Parker, T'Challa, Strange, Wanda, Bucky and Sam. Gamora, Loki and Vision die before the snap.",
      "summary": [
        "Thanos, who has already taken the Power Stone from the planet Xandar, boards with his four generals the ship carrying the survivors of Asgard. He overpowers Thor, beats the Hulk in hand-to-hand combat, takes the Space Stone from the Tesseract and kills Loki. Heimdall, before dying, sends the Hulk to Earth.",
        "Banner lands at Stephen Strange's Sanctum in New York and warns him, Wong and Tony Stark that Thanos wants to wipe out half of the life in the universe. Two generals come for the Time Stone. A spell keeps them from taking it off Strange, so they carry him away whole on a ship. Stark and Peter Parker board after them, kill the general and free Strange. They decide to go to Titan, Thanos's planet.",
        "The Guardians of the Galaxy answer Asgard's distress call and pick up Thor. He goes with Rocket and Groot to Nidavellir, where the king of the dwarfs forges him an axe capable of killing Thanos. Quill, Gamora, Drax and Mantis go to Knowhere after the Reality Stone and arrive too late. Thanos takes Gamora and forces her to say where the Soul Stone is, torturing Nebula in front of her. On Vormir, the guardian, the Red Skull, explains the price: the life of someone loved. Thanos weeps and throws her off the cliff.",
        "In Scotland, Wanda and Vision are attacked by the other two generals, who want the Mind Stone, and are saved by Steve, Natasha and Sam. Vision asks Wanda to destroy the Stone, and she refuses. They go to Wakanda, where Shuri may be able to remove it without killing him.",
        "On Titan, Stark, Strange, Peter and the Guardians immobilize Thanos and almost pull off the gauntlet. Nebula arrives and deduces that Gamora is dead. Quill attacks him, and he breaks free. Strange, who looked at millions of futures and saw only one with victory, hands over the Time Stone in exchange for the life of the wounded Stark.",
        "In Wakanda, an army advances while Shuri works. Banner fights in an armor, because the Hulk refuses to come out. Thor arrives with the axe and turns the battle; the generals die. Thanos appears. Wanda destroys the Stone, and Vision with it. Thanos turns back time, rips the Stone from his forehead and completes the gauntlet. Thor drives the axe into his chest. Thanos snaps his fingers.",
        "Half of all living beings turn to dust: Bucky, T'Challa, Groot, Wanda, Sam, the Guardians who were on Titan, Strange, Peter. Stark and Nebula are left alone on Titan. Thanos watches a sunrise. In the credits, Nick Fury activates a pager before vanishing."
      ]
    },
    "hformiga2": {
      "title": "Ant-Man and the Wasp",
      "original": "Ant-Man and the Wasp",
      "year": 2018,
      "type": "f",
      "phase": 3,
      "description": "Under house arrest, Scott Lang helps Hope and Hank Pym rescue Janet van Dyne, trapped in the Quantum Realm for 30 years.",
      "consequence": "Scott is stuck in the Quantum Realm when the snap happens. The solution of Endgame comes from there.",
      "summary": [
        "Two years after fighting in Germany, Scott Lang is serving the last days of his house arrest. Hank Pym and Hope, fugitives because of him, manage to open a tunnel to the Quantum Realm for a few moments, where they believe Janet van Dyne has been trapped since 1987. Scott, who has been there, has a dream that is a message from her. Father and daughter get him out of the house, leaving a giant ant with the ankle monitor.",
        "A part is missing to stabilize the tunnel, and the black marketeer selling it decides to keep the technology for himself. Hope, now the Wasp, takes on the henchmen and is attacked by a masked woman who walks through walls and makes off with the lab, shrunk to the size of a suitcase. Pym looks for a former colleague he fell out with, Bill Foster, to locate it.",
        "The woman is Ava Starr, the Ghost. Her parents died in an experiment with Pym's technology, and the accident left her body unstable and in constant pain. Foster raised her. She is dying, and the two want to use Janet's quantum energy to cure her. Pym refuses, believing it would kill his wife, and runs off with the lab.",
        "Through the tunnel, Janet speaks through Scott and gives a location, with a two-hour deadline. The black marketeer pries the address out of Scott's friends and tips off the FBI. Pym and Hope are arrested, Ava takes the lab, and Scott helps them escape. Pym enters the Quantum Realm and finds Janet. Outside, a chase through the streets of San Francisco. Ava starts forcibly draining Janet, and it is Janet herself who, on leaving, gives her part of the energy willingly, easing the pain.",
        "Scott gets home in time to be released. In the credits, he enters the tunnel to collect more energy for Ava. Outside, Hank, Janet and Hope turn to dust in Thanos's snap, and he is stuck in there."
      ]
    },
    "cmarvel": {
      "title": "Captain Marvel",
      "original": "Captain Marvel",
      "year": 2019,
      "type": "f",
      "phase": 3,
      "description": "In 1995, Vers, a warrior of the Kree empire, falls to Earth and discovers she was the pilot Carol Danvers. With the young agent Nick Fury, she investigates her own past.",
      "consequence": "Carol becomes the most powerful hero of the saga. Monica Rambeau, her best friend's daughter, returns as an adult in WandaVision.",
      "summary": [
        "In 1995, Vers is a soldier in an elite Kree unit. She remembers nothing before six years ago and dreams of an older woman. Her commander, Yon-Rogg, trains her to hold back her powers, and the artificial intelligence that rules the Kree orders her to control her emotions. On a mission against the Skrulls, shapeshifting aliens, she is captured. Their leader, Talos, searches her memory, and the memories point to Earth. She escapes and crashes in Los Angeles.",
        "Agents Nick Fury and Phil Coulson of S.H.I.E.L.D. investigate. After killing a Skrull who was imitating Coulson, Fury comes to believe her. The two go to an Air Force base and find out who she is: Carol Danvers, a test pilot presumed dead in 1989, on the flight of an experimental engine designed by Dr. Wendy Lawson, the woman from the dreams. They flee in a jet, with the doctor's cat, Goose.",
        "In Louisiana, they find Maria Rambeau, a former pilot, and her daughter Monica, who treated Carol like family. Talos arrives unarmed and tells the other side: the Skrulls are refugees, and Lawson was Mar-Vell, a Kree scientist who was helping them. The flight's black box restores her memory. Yon-Rogg killed Mar-Vell to take the engine. Carol shot it to destroy it and absorbed the explosion. The Kree took her, erased her memory and put in an implant that limits her powers.",
        "Mar-Vell's lab is in orbit, hidden. Talos's family is there, along with the engine's power source, the Tesseract. Yon-Rogg's troop captures Carol. Face to face with the Kree intelligence, she rips out the implant and uses her full power. Goose, who is an alien, swallows the Tesseract and scratches Fury's left eye. Carol destroys the missiles fired at Earth, and the Kree fleet backs off. She beats Yon-Rogg and sends him back with a message.",
        "Carol leaves to find a home for the Skrulls and leaves Fury a pager for emergencies. Fury begins to sketch a project to find more people like her and names it after Carol's pilot call sign: Avenger. In the credits, in 2018, the pager is activated and she appears before the Avengers; after that, Goose coughs up the Tesseract."
      ]
    },
    "ultimato": {
      "title": "Avengers: Endgame",
      "original": "Avengers: Endgame",
      "year": 2019,
      "type": "f",
      "phase": 3,
      "description": "Five years after the snap, the surviving Avengers attempt one last plan: travel to the past, get the Stones before Thanos does and bring everyone back.",
      "consequence": "Everyone returns, five years later. Tony Stark and Natasha Romanoff die. Steve Rogers stays in the past with Peggy and, in old age, hands the shield to Sam Wilson. A Loki from 2012 escapes with the Tesseract, which starts his series.",
      "summary": [
        "Twenty-three days after the snap, Carol Danvers rescues Tony Stark and Nebula, adrift in space. On Earth are Banner, Steve, Thor, Natasha, Rhodes and Rocket. The group locates Thanos on a deserted planet. He used the Stones to destroy the Stones. Thor cuts off his head.",
        "Five years later, Scott Lang emerges from the Quantum Realm, where five hours passed for him, and proposes using it to travel in time. Stark, who now has a daughter, refuses and then solves the problem. Banner, who merged his intelligence with the Hulk's body, explains the rule: changing the past doesn't alter the present, it only creates another reality. The Stones will have to be borrowed. Banner and Rocket fetch Thor in Norway, depressed and drunk among the Asgardians. Natasha fetches Clint Barton in Tokyo, where he has been killing criminals since he lost his family.",
        "New York, 2012: Banner convinces the Ancient One to lend the Time Stone; Steve takes the scepter from Hydra agents; Stark and Scott lose the Tesseract, and that year's Loki escapes with it. Steve and Stark then go to 1970, to a military base, where Stark gets the cube and talks to his father, and Steve steals Pym particles and sees Peggy through a window. Asgard, 2013: Rocket takes the Reality Stone from Jane Foster, and Thor, comforted by his mother on the day she is to die, takes his hammer. Vormir, 2014: the Soul Stone demands a life, Natasha and Clint fight over the right to sacrifice themselves, and she falls. Morag, 2014: Rhodes and Nebula take the Power Stone.",
        "Nebula's implants link to those of her 2014 version, and that year's Thanos sees the future. He sends the Nebula of the past in place of the current one. At the base, Banner puts on a gauntlet made by Stark and snaps his fingers; his arm burns, and the vanished return. At that very moment, the infiltrating Nebula brings in Thanos's ship, which bombards the base.",
        "Stark, Steve and Thor face Thanos, who now wants to destroy the entire universe and make another. Steve lifts Mjolnir. When he is left alone, shield broken, before the army, portals open: Strange brings the sorcerers, the Avengers who came back, the Guardians, Wakanda, Asgard. The gauntlet passes from hand to hand. Carol tears through the enemy ship. Thanos takes the gauntlet. Stark pulls the Stones from it with his own armor and snaps his fingers. Thanos and the army turn to dust. Stark dies, with Pepper and Peter beside him.",
        "After the funeral, Thor hands New Asgard over to Valkyrie and leaves with the Guardians. Steve takes the Stones and the hammer back to their times and does not return through the machine. He is sitting on a bench nearby, an old man. He hands the shield to Sam Wilson. The last scene is the dance he owed Peggy."
      ]
    },
    "aranha2": {
      "title": "Spider-Man: Far From Home",
      "original": "Spider-Man: Far From Home",
      "year": 2019,
      "type": "f",
      "phase": 3,
      "description": "On a school trip through Europe, Peter Parker is summoned by Nick Fury to fight elemental creatures alongside Mysterio, who says he comes from another Earth.",
      "consequence": "Mysterio reveals to the world that Peter Parker is Spider-Man.",
      "summary": [
        "In Mexico, Nick Fury and Maria Hill investigate a strange storm and find a monster made of earth. A caped stranger, Quentin Beck, defeats it. In New York, Peter Parker's school ends a restarted school year: the students who vanished in the snap came back five years later, the same age. The world calls it the Blip.",
        "Peter, grieving for Stark, just wants to travel with his class to Europe and tell MJ how he feels. He ignores Fury's calls. In Venice, a water monster attacks, and Beck beats it. Fury hands Peter a pair of glasses left by Stark, which give access to E.D.I.T.H., an artificial intelligence with satellites and armed drones. Beck says he came from another Earth, destroyed by four Elementals, and that the last one, fire, will attack Prague. Fury diverts the trip there.",
        "Peter and Beck destroy the fire monster. Convinced that Beck is the adult hero the world needs, Peter hands him the glasses. That was the plan. Beck is a former Stark employee, fired for instability, and the monsters are drone projections, the work of a team of resentful former colleagues. With E.D.I.T.H., he can stage something bigger.",
        "MJ reveals she already knew who Peter is and shows a projector she found lying around. The two figure out the scam. Peter goes to Berlin to warn Fury, but the one who receives him is Beck, inside an illusion. Beck makes him say who else knows and lets him be hit by a train. Peter survives and wakes up in the Netherlands. Happy Hogan picks him up, and he makes a new suit on the plane.",
        "In London, Beck stages the final attack, designed to kill Peter's classmates, the only witnesses. Peter pushes through the illusions relying only on his danger sense, retakes the glasses and shuts everything down. Beck is hit by a drone shot and dies ordering an accomplice to save the recordings.",
        "Back in New York, Peter and MJ start dating. In the credits scene, a giant screen shows an edited video in which Beck accuses Spider-Man of killing him and says his name. In the last scene, the Fury and Hill from the trip turn out to be the Skrulls Talos and Soren; the real Fury is on a ship in space."
      ]
    },
    "wandavision": {
      "title": "WandaVision",
      "original": "WandaVision",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "Wanda and Vision live as a sitcom couple in a small town, each episode set in a different decade of TV. Outside, agents try to understand what happened to the town.",
      "consequence": "Wanda becomes the Scarlet Witch and keeps the Darkhold, the book that corrupts her. A white Vision, with no memories, flies away. Agatha Harkness is left trapped in the town.",
      "summary": [
        "Three weeks after Endgame, Wanda Maximoff and Vision live as newlyweds in Westview, New Jersey, hiding from the neighbors what they are. Everything takes the form of a TV series. The first episode is from the 1950s, in black and white, with a dinner for the boss and a nosy neighbor, Agnes. The second is from the 1960s; at the end, a man in a beekeeper suit climbs out of a manhole, and Wanda rewinds the scene and redoes it. The show turns to color. Wanda becomes pregnant and, in the 1970s episode, gives birth to twins, Billy and Tommy. The neighbor who helps with the birth mentions Ultron, and Wanda hurls her out of the town.",
        "The fourth episode shows the outside. The neighbor is Monica Rambeau, a captain in the S.W.O.R.D. agency, who has just come back from the Blip and was sent to investigate why an entire town disappeared. With FBI agent Jimmy Woo and the scientist Darcy Lewis, she finds out that the town is under an energy barrier and broadcasting a series, with the residents as the cast. S.W.O.R.D. director Hayward wants Wanda dead and says she stole Vision's body.",
        "Inside, the boys grow up in days, and Vision starts to notice that the neighbors are suffering. A Pietro, Wanda's dead brother, shows up at the door with a different face. Vision tries to leave the town and starts to fall apart; Wanda expands the barrier to save him. Monica crosses the barrier a third time and comes out of it with powers.",
        "Agnes reveals herself as Agatha Harkness, a witch who in 1693 drained her own coven. It was she who sent the fake Pietro. She makes Wanda relive her own life: childhood in Sokovia watching American sitcoms, the bomb that killed her parents, the experiments with the Mind Stone. And what happened before Westview: Hayward wouldn't let her bury Vision, she went to the plot of land he had bought for the two of them and, out of grief, created all of it out of nothing, a new Vision included. Agatha gives it the name it has: the Scarlet Witch.",
        "In the finale, Hayward releases Vision's original body, rebuilt in white and without memories, to kill Wanda. The two Visions fight and then talk, and Wanda's gives the other his memories back, and he flies away. Agatha tries to take Wanda's magic and loses; Wanda traps her in the Agnes persona. Agatha had freed the residents for an instant, and they told Wanda what they felt. She takes down the barrier, saying goodbye to Vision and the children, who vanish with it.",
        "Hayward is arrested. Monica is approached by a Skrull in the service of a friend of her mother's. In the last scene, Wanda, isolated in a cabin, studies the Darkhold and hears the twins call for help."
      ]
    },
    "falcao": {
      "title": "The Falcon and the Winter Soldier",
      "original": "The Falcon and the Winter Soldier",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "Sam Wilson hands the shield back to the government, which names another Captain America. He and Bucky Barnes take on a radical group that wants the world as it was during the Blip.",
      "consequence": "Sam takes up the post of Captain America. John Walker becomes U.S. Agent, recruited by Valentina de Fontaine.",
      "summary": [
        "Six months after receiving the shield, Sam Wilson concludes it isn't his to wield and donates it to a museum. The government immediately hands it to John Walker, a decorated captain, presented as the new Captain America. Bucky Barnes, who is in mandatory therapy and trying to make amends for the Winter Soldier's crimes, is furious.",
        "The two take on the Flag Smashers, a group led by the young Karli Morgenthau, who believes the world was better during the Blip, without borders. They have super-soldier strength. To find out where the serum came from, Sam meets Isaiah Bradley, a Black soldier who received the formula in the 1950s and spent thirty years imprisoned as a guinea pig. Next, Bucky gets Helmut Zemo out of prison. The trail leads to Madripoor, where a scientist is recreating the serum for someone called the Power Broker. Sharon Carter, a former agent abandoned by the government, saves them. Zemo kills the scientist, and Karli gets the doses.",
        "The warriors of Wakanda come to collect Zemo, the killer of their king. Zemo destroys almost all of the serum, and Walker keeps the last vial and takes it in secret. In a fight, Karli accidentally kills Walker's partner. He catches one of the Flag Smashers in a square and kills him with the shield, surrendering, in front of cell phones.",
        "Sam and Bucky take the shield by force, breaking Walker's arm. He is thrown out of the Army and sought out by Valentina de Fontaine. Bucky hands Zemo over to the Wakandans. Isaiah tells Sam that no Black man should want to be Captain America. Sam trains with the shield anyway.",
        "In the Flag Smashers' attack on a meeting in New York, Sam shows up with new wings made in Wakanda and the shield. Sharon reveals herself as the Power Broker and kills Karli. Sam makes the senators a speech about who they call a terrorist and convinces them not to forcibly remove the refugees. He takes Isaiah to a museum, where there is now a statue of him. Valentina gives Walker the name U.S. Agent. In the credits, Sharon is pardoned, returns to the CIA and starts selling secrets."
      ]
    },
    "loki1": {
      "title": "Loki (Season 1)",
      "original": "Loki",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "The Loki who escaped in 2012 is arrested by the Time Variance Authority (TVA), a bureaucracy that prunes the branches of time. He is put to work hunting a variant of himself.",
      "consequence": "Sylvie kills He Who Remains, the man who kept a single timeline. The multiverse opens.",
      "summary": [
        "The Loki of 2012, who grabbed the Tesseract during the Avengers' time heist, is arrested within minutes by the Time Variance Authority and tried for crimes against the Sacred Timeline. The analyst Mobius shows him on a projector the life he would have had: his mother's death, indirectly caused by him, and his own, at the hands of Thanos. Loki tries to escape and gives up on seeing employees use Infinity Stones as paperweights. He agrees to help Mobius hunt a Loki variant who kills agents.",
        "The two deduce that the variant hides in catastrophes, where nothing she does changes time. They find her in a hurricane in 2050. She is Sylvie, a Loki. She turns down the offer to take their bosses' place together, scatters bombs through the timeline and vanishes through a portal; Loki goes after her.",
        "They get stuck in 2077, on a moon about to be crushed by a planet, with the travel device out of battery. Sylvie says she was taken by the TVA as a child and that the agency's employees are all kidnapped variants with erased memories. Facing certain death, the two grow closer, and this creates a branch so strange that the TVA locates them.",
        "Mobius finds proof that Sylvie is telling the truth and is pruned by Judge Renslayer. Brought before the Time-Keepers, Loki and Sylvie fight, and she cuts off the head of one: it's a robot. Renslayer prunes Loki. He wakes in the Void, a place at the end of time where everything the TVA erases goes, among other Lokis: an old one, a boy, an alligator. A living cloud, Alioth, devours whatever arrives. Sylvie lets herself be pruned to follow him. The old Loki sacrifices himself by creating an illusion of Asgard to distract the cloud, and the two enchant it together. Behind it there is a citadel.",
        "He Who Remains lives there. He explains: in the 31st century, versions of him in several universes discovered each other, and some wanted to conquer the others. The war nearly destroyed everything. He won it using Alioth, isolated one timeline and created the TVA so the other versions would never be born again. Tired, he offers the two the post: either they take over, or they kill him and unleash the multiverse, with far worse versions of him. Loki wants to think. Sylvie kisses him, pushes him through a portal and kills the man. The timelines branch out of control. Loki arrives at a TVA where Mobius doesn't know him and there is a statue of the dead man in the lobby."
      ]
    },
    "viuva": {
      "title": "Black Widow",
      "original": "Black Widow",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "Between Civil War and Infinity War, Natasha Romanoff meets again the fake spy family she grew up with and attacks the Red Room, the program that trained her.",
      "consequence": "Introduces Yelena Belova and Alexei, the Red Guardian, future Thunderbolts.",
      "summary": [
        "In 1995, in Ohio, a family looks ordinary: father, mother and two girls. They are Russian agents. Alexei is a super-soldier, Melina is a Black Widow, and Natasha and Yelena are the daughter of neither. With the mission complete, they flee to Cuba, and the boss, General Dreykov, takes the girls to the Red Room, where they are trained as assassins. Alexei is thrown in prison.",
        "Years later, Natasha defects to S.H.I.E.L.D. The proof of loyalty is an attack in Budapest, carried out with Clint Barton, that apparently kills Dreykov and his young daughter, Antonia.",
        "In 2016, right after Civil War, Natasha is a fugitive and hides in Norway. Yelena, on a mission, is hit by a gas that cancels the chemical control the Red Room now imposes on the Widows, and sends vials of the antidote to her sister. A masked soldier who copies the fighting style of anyone, Taskmaster, attacks Natasha because of them. She goes to Budapest, meets Yelena again and learns that Dreykov is alive and the program goes on.",
        "The two get Alexei out of prison. He takes them to Melina, who is perfecting mind control on a farm. Natasha convinces her to help, and the two swap faces with masks to enter the Red Room, a flying base. Dreykov notices and reveals that Taskmaster is Antonia, who survived the attack with her brain rebuilt. A scent-based block keeps any Widow from hurting him. Natasha breaks her own nose to cut the nerve and attacks him.",
        "The base begins to fall. Yelena releases the antidote over the Widows and blows up the ship Dreykov was escaping in. Natasha copies the list of Widows scattered around the world, frees Antonia and cures her. She hands the list to Yelena and leaves to get her friends out of the Raft. After the credits, years later, Yelena visits her sister's grave, and Valentina de Fontaine points Clint Barton out to her as the culprit."
      ]
    },
    "whatif": {
      "title": "What If...?",
      "original": "What If...?",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "An animated anthology in three seasons. The Watcher observes alternate versions of familiar stories: Peggy Carter with the serum, T'Challa in Peter Quill's place.",
      "consequence": "Shows the multiverse from the inside. A flesh-and-blood Captain Carter appears in Multiverse of Madness.",
      "summary": [
        "An animated series in three seasons. The narrator is the Watcher, a being who observes all universes and has sworn never to interfere. Each episode starts from a small change in a familiar story.",
        "In the first season: Peggy Carter receives the serum in place of Steve Rogers and becomes Captain Carter. T'Challa is abducted in place of Peter Quill and becomes a better space adventurer than he is. The Avengers candidates are murdered one by one by a Hank Pym in mourning for his daughter. A Doctor Strange who can't accept his girlfriend's death absorbs power until he destroys his own universe. A virus from the Quantum Realm turns the heroes into zombies. Killmonger saves Tony Stark in Afghanistan and betrays him. Thor grows up without a brother and becomes a party boy.",
        "In the penultimate episode, an Ultron who got Vision's body defeats the Avengers, kills Thanos, takes the six Stones and discovers that other universes exist and someone is watching. He attacks the Watcher. The Watcher breaks his oath and gathers a team made up of the protagonists of the earlier episodes. They defeat Ultron with a computer virus, Killmonger tries to keep the Stones, and the corrupted Doctor Strange traps the two in a pocket dimension, which he then keeps watch over.",
        "It matters to the larger story because it shows the multiverse as a set of entire worlds, and because it is where the Captain Carter who appears in flesh and blood in Multiverse of Madness comes from."
      ]
    },
    "shangchi": {
      "title": "Shang-Chi and the Legend of the Ten Rings",
      "original": "Shang-Chi and the Legend of the Ten Rings",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "Shang-Chi lives as a valet in San Francisco, hiding from his father, the immortal leader of the Ten Rings organization. The past comes looking for him.",
      "consequence": "The rings emit a signal to an unknown place. Shang-Chi lands on the Avengers' radar.",
      "summary": [
        "A thousand years ago, Xu Wenwu finds ten rings that give him strength, energy and endless life. With them he founds a secret organization, the Ten Rings, which topples governments over the centuries. In 1996, he sets out in search of Ta Lo, a village of mythical creatures, and is stopped at the entrance by its guardian, Ying Li. The two fall in love. She leaves the village, he puts away the rings and leaves the organization, and they have two children, Shang-Chi and Xialing.",
        "When Shang-Chi is seven, Wenwu's old enemies kill Li. He puts the rings back on, massacres the killers and takes everything back. He trains his son to kill and ignores his daughter, who teaches herself. At 14, Shang-Chi is sent to kill a gang leader. He carries out the order and flees to San Francisco.",
        "In the present, he is Shaun, a hotel valet, with his friend Katy. His father's men attack him on a bus and steal the pendant his mother gave him. He goes to Macau to warn his sister, who has the other pendant and runs an underground fight club, and tells Katy who he is. The three are captured. In their father's compound, the pendants reveal a map to Ta Lo. Wenwu hears his wife calling to him from behind a sealed gate and is going to break it down, destroying the village if need be.",
        "In the cell they meet Trevor Slattery, the actor who pretended to be the Mandarin, kept there as a jester, and his pet creature, which knows the way. In Ta Lo, their aunt explains: the voice belongs to the Dweller-in-Darkness, a soul-devouring being held behind the gate by a dragon, who imitates Li to be set free. The village arms itself.",
        "Wenwu arrives, defeats his son and throws him in a lake. He starts breaking the gate, and creatures escape. His men begin to fight beside the villagers. The dragon pulls Shang-Chi out of the water. He faces his father again, using his mother's style, wins and does not kill him. The Dweller breaks loose; Wenwu saves his son, is devoured and, before that, passes him the rings. Shang-Chi, the dragon, Xialing and Katy kill the creature.",
        "Back in San Francisco, Wong comes to get them. In the credits, in Kamar-Taj, Bruce Banner and Carol Danvers examine the rings: it is not known what they are made of, they are far older than a thousand years and work as a beacon, sending a signal somewhere. After that, Xialing takes over her father's organization and begins training women."
      ]
    },
    "eternos": {
      "title": "Eternals",
      "original": "Eternals",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "The Eternals, immortal beings sent to Earth seven thousand years ago, come together when the creatures they hunted reappear. They find out what they were really sent for.",
      "consequence": "A giant Celestial is left petrified in the middle of the ocean. That island is the center of Brave New World.",
      "summary": [
        "In 5000 BC, Arishem, a Celestial, sends ten Eternals to Earth to exterminate the Deviants, predators that hunt humans. The last Deviant dies in 1521. With no mission, the group argues over whether to intervene in human wars and splits up. For the next five hundred years, each lives in their own way, waiting for orders.",
        "In the present, in London, Sersi, who transforms matter, is dating a human, Dane, and lives with Sprite, an Eternal with a child's body. A Deviant attacks them, and Ikaris, the strongest of the group and Sersi's ex, shows up to save them. The three look for the leader, Ajak, and find her dead. She had chosen Sersi as her successor, which gives her the power to speak with Arishem.",
        "Arishem tells the truth. Celestials are born inside planets and need the energy of a large population. The Deviants were created to eliminate predators and got out of control; the Eternals were created to eliminate them and let humanity grow. Earth is an egg. The return of billions of people after the Blip completed the energy, and the birth of Tiamut, which destroys the planet, is imminent. The Eternals, moreover, are machines, with their memory wiped after each mission.",
        "Sersi gathers the others: a Bollywood star, an inventor with a husband and son, a warrior who is losing her memory and her protector, a telepath isolated in the Amazon, a speedster. The protector dies in an attack. The plan is to join everyone's powers so the telepath can put Tiamut to sleep. Ikaris refuses. He always knew the truth and, when Ajak decided to save Earth, handed her over to the Deviants. Sprite, who loves him, takes his side.",
        "The birth begins in a volcano in the Indian Ocean. The others hold Ikaris back. The telepath can't do it, and Sersi, with everyone's strength, turns Tiamut to stone when its head and hand are already out of the water. Ikaris breaks free to kill her and can't. He flies into the Sun. Sersi makes Sprite human.",
        "Three Eternals set off to warn those on other planets. Arishem appears in the sky and takes Sersi and two others: he will judge from their memories whether humanity deserves to live. In the credits, Eros appears, Thanos's brother; after that, Dane opens a box with a family sword."
      ]
    },
    "gaviao": {
      "title": "Hawkeye",
      "original": "Hawkeye",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "Days before Christmas, Clint Barton gets stuck in New York because of Kate Bishop, a 22-year-old archer who put on the wrong suit at the wrong time.",
      "consequence": "Kate Bishop becomes Clint's partner. Yelena finds out how Natasha died. The Kingpin enters the MCU.",
      "summary": [
        "In 2012, young Kate Bishop watches from a window as a man with a bow and arrow saves her life during the Battle of New York. Her father dies that day. In 2024, at 22, an archery champion, she grows suspicious of her mother's fiancé, Jack, and follows him to an underground auction of objects taken from the ruins of the Avengers' base. A gang in tracksuits storms the place looking for a watch. Kate puts on a black suit from the lot to fight. It is the suit of Ronin, the identity Clint Barton used to kill criminals during the Blip.",
        "Clint is in New York with his kids for Christmas, sees Ronin on the news and goes to recover the suit. He sends the kids home, promising to arrive in time. The gang is run by Maya Lopez, who is deaf and whose father was killed by Ronin. Clint and Kate are captured, escape in a car chase with trick arrows, and he breaks his hearing aid.",
        "A masked assassin attacks the two on a rooftop: Yelena Belova, who came back from the Blip, learned that her sister Natasha died and was hired to kill Clint. He sends Kate away to protect her. Dressed as Ronin, he faces Maya and tells her what he knows: the one who gave up her father was an informant on the inside, on the boss's orders. Yelena turns up at Kate's apartment, has dinner with her and then sends her a message: the one who hired her was Eleanor, Kate's mother, and she works for Wilson Fisk, the Kingpin.",
        "On Christmas Eve, at a party at Rockefeller Center, the gang tries to kill Clint. He and Kate face them on the ice rink. Yelena corners him and demands payment for her sister's death. He tells her what happened on Vormir and uses a whistle only the two sisters knew. She lets him go. Kate takes Fisk down with arrows and watches her mother get arrested for the murder of a business partner. Maya kills the accomplice who betrayed her, catches up with Fisk in an alley and aims her gun. A shot is heard.",
        "Clint takes Kate and a dog to spend Christmas with his family. He gives the watch back to his wife, a former S.H.I.E.L.D. agent, and burns the Ronin suit."
      ]
    },
    "aranha3": {
      "title": "Spider-Man: No Way Home",
      "original": "Spider-Man: No Way Home",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "With his identity exposed, Peter asks Strange for a spell to make the world forget who he is. The spell goes wrong and pulls in people from other universes who know a Peter Parker.",
      "consequence": "Aunt May dies. To close the rifts, Strange makes the whole world forget Peter Parker, MJ and Ned included.",
      "summary": [
        "The film begins the second after Far From Home. With his name exposed and accused of murder, Peter Parker is detained along with MJ, Ned and Aunt May. The lawyer Matt Murdock gets the charges dropped, but half the country hates him. MIT turns the three down because of the controversy.",
        "Peter asks Stephen Strange for a spell so that everyone forgets he is Spider-Man. In the middle of the spell, he keeps asking for exceptions, for MJ, for Ned, for May, and the magic gets corrupted. Strange contains it. Days later, on a bridge, Peter is attacked by a man with metal tentacles, Otto Octavius, and by a green glider. The spell pulled in people from other universes who know a Peter Parker who is Spider-Man.",
        "Strange sends Peter, MJ and Ned to capture the visitors: Octavius, the Lizard, Electro, Sandman and Norman Osborn, the Green Goblin, who turns up confused and is taken in by May. All were pulled from the instant before their own deaths. Strange is going to send them back. Peter thinks he should first cure them, to change their fate. He steals the spell's box, traps Strange in a mirror dimension and takes the five to Happy Hogan's apartment. He cures Octavius.",
        "The Goblin personality takes over Osborn again, turns the others against Peter and destroys the building. May is wounded. Before dying, she tells her nephew that with great power comes great responsibility. Ned, with Strange's ring, opens portals looking for Peter and finds two other Peter Parkers, older, from other universes. The two tell what they lost, an uncle and a girlfriend, and convince the youngest not to give up.",
        "The three carry out the cures and lure the villains to the Statue of Liberty. One by one, they are cured; Octavius helps. One of the Peters saves MJ from a fall just like the one that killed his girlfriend. Peter nearly kills the Goblin with his own glider, and the other Peter steps in front of the blade. Osborn is cured.",
        "The spell escapes, and the sky fills with cracks, with countless others arriving. The only way out is a bigger spell: that the whole world forget Peter Parker. He says goodbye to MJ and Ned, promising to find them and explain everything. The visitors go home.",
        "Weeks later, Peter goes to the cafe where MJ works, with a rehearsed speech. He sees that she and Ned are doing well, with a place at MIT, and says nothing. He visits May's grave, rents a room and sews a suit. In the credits, another visitor, Eddie Brock, is sent back and leaves a piece of the Venom symbiote on a bar counter."
      ]
    },
    "cavaleiro": {
      "title": "Moon Knight",
      "original": "Moon Knight",
      "year": 2022,
      "type": "s",
      "phase": 4,
      "description": "Steven Grant, a museum employee in London, discovers he shares his body with a mercenary who serves an Egyptian god.",
      "consequence": "A standalone story, with no effect on other titles so far.",
      "summary": [
        "Steven Grant, a salesman in a London museum gift shop, wakes up in the Alps with no idea how he got there and stumbles into a cult meeting. The leader, Arthur Harrow, wants a scarab he has. At home, he discovers he lost two days and gets a call from a woman, Layla, who calls him Marc. Attacked by an invisible jackal, he sees his own reflection ask for control of his body. The reflection is Marc Spector.",
        "Marc is an American mercenary and the avatar of Khonshu, the Egyptian moon god: on the verge of death in the desert, he agreed to serve him. Harrow was the previous avatar and now wants to resurrect Ammit, a goddess who judges people for what they have yet to do. The scarab points to her tomb. The other gods don't believe Marc and lock Khonshu in a statuette.",
        "Marc and Layla, who is an archaeologist and his wife, find the tomb. Harrow tells her that Marc was present when her father was killed, and shoots him. Marc wakes up in a psychiatric hospital that is an image of the afterlife. A goddess in the form of a hippopotamus explains that he and Steven are dead and that their hearts must be balanced. To do that, they relive what they hid: Marc's younger brother drowned in a game, their mother blamed him and beat him for years, and he invented Steven to have somewhere to take refuge.",
        "Harrow releases Ammit. Layla frees Khonshu and agrees to be the hippopotamus goddess's avatar. Marc comes back to life with Steven, and the three trap Ammit in Harrow's body. Marc refuses to kill him and demands to be released from service.",
        "In the credits scene, a third identity appears, Jake Lockley, who keeps working for Khonshu without the others knowing and kills Harrow. The series is not tied to any other title."
      ]
    },
    "estranho2": {
      "title": "Doctor Strange in the Multiverse of Madness",
      "original": "Doctor Strange in the Multiverse of Madness",
      "year": 2022,
      "type": "f",
      "phase": 4,
      "description": "America Chavez, a teenager able to open portals between universes, is chased by someone who wants that power. Strange protects her in a flight across several realities.",
      "consequence": "Introduces incursions: universes that collide and destroy each other. Wanda brings the Darkhold's temple down on herself. On Earth-838 there are a Reed Richards and a Professor Xavier.",
      "summary": [
        "In a space between universes, a Stephen Strange flees a demon with a teenage girl, America Chavez. He dies, and she, terrified, opens a star-shaped portal and falls onto the main Earth, carrying his body. At his ex-girlfriend's wedding, this world's Strange sees a monster chase the girl down the street and, with Wong, saves her. America opens portals between universes and can't control the power, which only shows up when she feels fear.",
        "Strange notices witchcraft runes on the monster and goes to Wanda Maximoff for help. She is the one sending the creatures. After Westview, she read the Darkhold and became the Scarlet Witch. She wants America's power to go to a universe where Billy and Tommy exist, which would kill the girl. Strange refuses. Wanda attacks Kamar-Taj and kills many sorcerers. America, in a panic, takes Strange to another universe.",
        "It is Earth-838. There, Wanda uses the Darkhold to take over the body of the local Wanda, a suburban mother. A sorceress from Kamar-Taj sacrifices herself to burn the book, and Wanda forces Wong to take her to Mount Wundagore, where the original text is carved in stone. On 838, Strange and America are imprisoned by the Illuminati: Mordo, Captain Carter, Black Bolt, Maria Rambeau as Captain Marvel, Reed Richards and Charles Xavier. They tell them that their Strange used the Darkhold to beat Thanos and caused an incursion, the collision of two universes, which destroyed one of them. They killed him in secret and think this Strange is the same.",
        "Wanda returns to the other one's body and reaches the headquarters. She kills the Illuminati one by one, except Mordo. Strange and America flee with the Christine of that world and look for the Book of the Vishanti, the opposite of the Darkhold. Wanda destroys it, captures America and throws the other two into a universe in ruins, devastated by an incursion. A corrupted Strange lives there, with a third eye. Strange beats him and uses his Darkhold to take over, from a distance, the corpse of the Strange who died at the start.",
        "On Wundagore, the animated corpse faces Wanda and frees America. Strange tells her to trust herself. She doesn't attack Wanda: she opens a portal to the boys' house on 838. They scream in fear and call for their real mother. Wanda sees what she has become. She brings the mountain down on herself, destroying every copy of the Darkhold in every universe.",
        "America stays at Kamar-Taj as an apprentice. Strange gains a third eye, the price of the book. In the credits, a sorceress approaches him in the street: he caused an incursion and will help fix it. Together they enter the Dark Dimension."
      ]
    },
    "msmarvel": {
      "title": "Ms. Marvel",
      "original": "Ms. Marvel",
      "year": 2022,
      "type": "s",
      "phase": 4,
      "description": "Kamala Khan, a teenager from Jersey City and a Captain Marvel fan, gets powers from a family bangle.",
      "consequence": "Kamala is the first MCU character to be called a mutant.",
      "summary": [
        "Kamala Khan is 16, lives in Jersey City with her Pakistani family and is a fan of the Avengers, especially Captain Marvel. Her parents won't let her go to a fan convention, and she sneaks out with her friend Bruno. She completes her costume with a golden bangle that came in a box from her grandmother. At the convention, the bangle lights up and she begins to create shapes of solid light. She causes an accident and saves a classmate. Two Damage Control agents see the video.",
        "Bruno helps her train and concludes that the bangle awakened something that was already in her. She meets Kamran, a new student, whose mother, Najma, leads a group of exiles from another dimension. Kamala's great-grandmother, Aisha, was one of them and the owner of the bangle. Najma wants to use it to open the passage back, even if that destroys this world.",
        "Her grandmother calls Kamala to Karachi. There she meets an order of vigilantes that protects the passage. In an attack, the bangle is hit, and Kamala is hurled into the night of 1947 when India was partitioned. She sees Aisha killed by Najma at the train station. It is Kamala herself who guides her grandmother, then a child, to her father in the crowd. The family story about a trail of stars was her.",
        "In the present, the passage opens. Najma sacrifices herself to close it and passes her power to her son. Back in Jersey City, Kamala's mother accepts her powers and sews her a uniform. Damage Control chases Kamran and surrounds the school. Kamala and her friends protect him, and the neighborhood sides with her. The agent in charge is removed. Kamala adopts the name Ms. Marvel.",
        "Bruno examines her genes and finds something no one in her family has: a mutation. In the credits scene, the bangle glows, and in Kamala's place Carol Danvers appears."
      ]
    },
    "thor4": {
      "title": "Thor: Love and Thunder",
      "original": "Thor: Love and Thunder",
      "year": 2022,
      "type": "f",
      "phase": 4,
      "description": "Thor tries to retire, but Gorr the God Butcher is killing deities. Jane Foster reappears wielding the hammer.",
      "consequence": "Jane dies. Thor adopts Gorr's daughter.",
      "summary": [
        "Gorr and his young daughter are the last of their people, in a desert. She dies of thirst while he prays. A sword that kills gods calls to him and takes him to the oasis where his god is feasting. The god laughs at his suffering. Gorr kills him and swears to kill them all. The sword gives him shadows and monsters and slowly poisons him.",
        "Thor has been traveling with the Guardians of the Galaxy since Endgame. A distress call separates him from them and takes him back to New Asgard, in Norway, which Gorr attacks. In the middle of the fight, someone wields the remade Mjolnir: Jane Foster. She has stage-four cancer. She went to New Asgard hoping the hammer would cure her, and it remade itself for her, because of an old request from Thor to protect her. Gorr is repelled, but takes the town's children.",
        "Thor, Jane, King Valkyrie and Korg ask for help in the city of the gods. Zeus refuses, out of fear, and orders them locked up. Thor runs him through with his own lightning bolt, which Valkyrie takes. On the way, Jane tells him about the disease. In the Shadow Realm, they discover the plan: Gorr wants the axe Stormbreaker, which opens the way to Eternity, an entity that grants a wish to whoever arrives. He takes it.",
        "Thor learns that the hammer gives Jane strength and, with each use, takes from her body the ability to fight the cancer. One more transformation kills her. He goes alone, shares his power with the children to face the monsters and fights Gorr. Jane shows up anyway and destroys the sword. The three fall before Eternity.",
        "Thor gives up fighting and asks Gorr to choose love over revenge. He is going to stay with Jane, who dies in his arms. Gorr, dying too, asks for his daughter back and Thor gives her to him. He begins to raise her. In the credits, Zeus sends his son Hercules after Thor; after that, Jane arrives in Valhalla, welcomed by Heimdall."
      ]
    },
    "mulherhulk": {
      "title": "She-Hulk: Attorney at Law",
      "original": "She-Hulk: Attorney at Law",
      "year": 2022,
      "type": "s",
      "phase": 4,
      "description": "The lawyer Jennifer Walters, Bruce Banner's cousin, turns into a Hulk after an accident and starts handling legal cases for superhumans.",
      "consequence": "Daredevil appears. Banner introduces his son, Skaar.",
      "summary": [
        "Jennifer Walters, a prosecutor in Los Angeles, is in a car accident with her cousin Bruce Banner, and his blood gets into a cut of hers. She turns into a Hulk and, unlike him, keeps her consciousness from the first time. Banner takes her to a lab in Mexico to train her. She just wants to go back to work.",
        "After transforming in a courtroom to stop an influencer with super strength, she is fired. A big law firm hires her to head its superhuman division, on the condition that she works transformed. The first case is the parole of Emil Blonsky, the Abomination. Cases of the week follow: a shapeshifting elf, a magician who learned real magic from Wong, the influencer who trademarked the name She-Hulk. A forum of resentful men on the internet starts to threaten her.",
        "She faces the lawyer Matt Murdock in court, who is Daredevil at night, and the two get involved. At a lawyer-of-the-year award, the forum shows an intimate video of her, and she destroys the giant screen. She is arrested, fired and forced to wear an inhibitor. The forum's leader, a billionaire, had stolen her blood to become a Hulk.",
        "The last episode turns into a mess of villains and twists. Jennifer, who has been talking to the camera from the start, steps out of the screen, goes to the Marvel studio and demands a less lazy ending from the robot that writes the stories. She gets one. Banner returns from Sakaar with a son, Skaar. It is in this series that the repeal of the Sokovia Accords is mentioned."
      ]
    },
    "lobisomem": {
      "title": "Werewolf by Night",
      "original": "Werewolf by Night",
      "year": 2022,
      "type": "e",
      "phase": 4,
      "description": "Monster hunters gather in a mansion to compete for a relic. One of them is not what he seems.",
      "consequence": "A standalone story, with no effect on other titles so far.",
      "summary": [
        "A special of about an hour, in black and white, in the style of 1930s monster movies. Ulysses Bloodstone, the greatest monster hunter, dies. His widow summons five hunters to the mansion for a hunt that will decide who inherits the family relic, a red stone. Elsa, the estranged daughter, shows up uninvited to compete.",
        "The hunt takes place in a maze, and the prey is a monster with the stone embedded in its body. One of the hunters, Jack Russell, finds the monster and calls it by name: it is Ted, a swamp creature, his friend, whom he came to rescue. Jack and Elsa make a deal. He frees Ted, she keeps the stone.",
        "The stone reacts to Jack's touch and reveals that he is a monster too. The widow imprisons both and uses the relic to force the transformation: Jack becomes a werewolf and kills the guards. Elsa faces the other hunters. The werewolf recognizes her and spares her. The widow points a gun at her stepdaughter, and Ted incinerates her. Elsa inherits the house and the stone. Jack wakes in the forest, with Ted beside him. It is not tied to any other title."
      ]
    },
    "wakanda": {
      "title": "Black Panther: Wakanda Forever",
      "original": "Black Panther: Wakanda Forever",
      "year": 2022,
      "type": "f",
      "phase": 4,
      "description": "After King T'Challa's death, Wakanda is pressured by the powers that want its vibranium. The greater threat comes from the bottom of the sea: Namor, king of Talokan.",
      "consequence": "Shuri becomes the Black Panther and makes a fragile alliance with Namor. T'Challa left a son. Riri Williams debuts.",
      "summary": [
        "King T'Challa is dying of an illness. His sister, Shuri, tries to recreate in the lab the heart-shaped herb, burned by Killmonger, that might have cured him. She doesn't manage it in time. A year later, Queen Ramonda confronts at the UN countries that want Wakanda's vibranium and are trying to steal it. Shuri, buried in work, refuses to continue the herb research and to grieve.",
        "The Americans use a new detector and find vibranium at the bottom of the Atlantic. The expedition is massacred by blue-skinned warriors who breathe underwater. Their king, Namor, appears on a beach in Wakanda, having passed every defense. He blames the country for revealing the metal to the world and demands they hand over whoever invented the detector, or he will attack.",
        "The inventor is Riri Williams, an MIT student. Shuri and General Okoye find her; Namor's warriors catch up with them, beat Okoye and take the two young women. Ramonda dismisses Okoye and goes to Haiti to ask for help from Nakia, the spy who was T'Challa's love. Underwater, Namor shows Shuri his city, Talokan, and tells her its origin: in the 16th century, a Mayan people fleeing the Spanish ate a plant that grew on vibranium. He proposes an alliance against the surface. Nakia rescues the two and, in the escape, kills two guards.",
        "Namor responds by flooding the capital. Ramonda drowns saving Riri. The people take refuge in the Jabari mountains. After the funeral, Shuri recreates the herb using a remnant of the Talokan plant and takes it. On the ancestral plane, Killmonger is waiting for her, and asks whether she will be noble like her brother or settle things like he did. She puts on a new suit and orders the counterattack, against M'Baku's advice.",
        "The Wakandans lure Talokan onto a ship. Riri fights in an armor she built herself; Okoye, in a new armor. Shuri traps Namor on an aircraft to dry him out and falls with him onto a deserted beach. She wins. With the spear at his neck, she sees her mother and, instead of killing him, offers peace. Namor surrenders. To his cousin, who protests, he explains: the alliance will serve Talokan when the world turns against Wakanda.",
        "Riri goes back to MIT without the armor. Shuri plants new herbs. On the day of the challenge for the throne, the one who shows up is M'Baku. Shuri is in Haiti, where she finally burns her mourning clothes. In the credits scene, Nakia introduces her to a boy, T'Challa's son, whom she raised in secret. His Wakandan name is his father's."
      ]
    },
    "ggnatal": {
      "title": "The Guardians of the Galaxy Holiday Special",
      "original": "The Guardians of the Galaxy Holiday Special",
      "year": 2022,
      "type": "e",
      "phase": 4,
      "description": "Mantis and Drax go to Earth to find a Christmas present to cheer up Peter Quill.",
      "consequence": "Mantis reveals she is Quill's sister.",
      "summary": [
        "A forty-minute special. The Guardians bought Knowhere from the Collector and adopted a telekinetic Russian dog, Cosmo. Near Christmas, the pirate Kraglin tells how Yondu ruined the holiday when Peter Quill was a boy. Mantis, seeing Quill still down because of Gamora, decides to give him the perfect present: his childhood hero, the actor Kevin Bacon.",
        "Mantis and Drax go to Hollywood, find the actor's house and take him by force, in a trance. On Knowhere they discover, disappointed, that he only plays heroes. Quill is horrified by the kidnapping and orders him returned. Bacon, on learning how much he meant to that boy, decides to stay for the party.",
        "In the end, Quill says that Yondu later regretted it and gave him the pistols he still uses today as a present. And Mantis reveals what she had been keeping: she is also Ego's daughter. She is his sister."
      ]
    },
    "quantumania": {
      "title": "Ant-Man and the Wasp: Quantumania",
      "original": "Ant-Man and the Wasp: Quantumania",
      "year": 2023,
      "type": "f",
      "phase": 5,
      "description": "Scott Lang, his daughter Cassie and the Pym family are sucked into the Quantum Realm, where Kang, a conqueror of timelines, lives in exile.",
      "consequence": "Kang is defeated, and a crowd of variants of him gathers. It was the setup for the saga's villain, a plan Marvel abandoned.",
      "summary": [
        "After Endgame, Scott Lang became a celebrity and the author of a memoir. He lives with Hope in San Francisco. His daughter, Cassie, 18, helps people displaced after the Blip, has been arrested at protests and thinks her father has gotten complacent. At a dinner, she shows what she built with Hank Pym's help: a device that sends signals to the Quantum Realm. Janet van Dyne panics and tries to shut it off. The signal has already gone out. A portal sucks in all five.",
        "They fall separately. Scott and Cassie are picked up by rebels fighting a ruler. Hope, Janet and Hank reach a city and look for an old ally of Janet's, who now serves that ruler: Kang.",
        "Janet tells what she hid for thirty years. She met Kang there, when both were trapped, and helped him fix the power core of his ship, which would get them out. Touching the finished core, she saw who he was: a conqueror who erased entire timelines and was exiled by his own variants, out of fear. She used Pym particles to enlarge the core until it was useless. Kang recovered part of his power and built an empire anyway.",
        "Kang's soldiers, led by a giant head on a floating chair, capture Scott and Cassie. The head is Darren Cross, the villain of the first film, deformed. Kang threatens to kill Cassie if Scott doesn't shrink the core back. Inside it, Scott multiplies into thousands of possible versions of himself; Hope arrives and helps him. Kang gets the core, breaks the deal, takes Janet and orders the ship destroyed with Hank inside.",
        "Hank is saved by his ants, which fell into a spot where time runs faster and evolved over millennia. They attack the citadel. Cassie frees the rebels and convinces Cross to switch sides; he dies in the fight. Janet fixes the core to open the portal back. Kang attacks Scott, Hope returns, and the two push him against the core, which consumes him.",
        "The family returns home. Scott is left with a doubt: Kang warned that something worse would come if he fell. In the credits, a council of Kang variants comments on the death of the exile and gathers thousands of others; after that, Loki and Mobius watch one more, an inventor, in 1893. Marvel abandoned the council's plot."
      ]
    },
    "gg3": {
      "title": "Guardians of the Galaxy Vol. 3",
      "original": "Guardians of the Galaxy Vol. 3",
      "year": 2023,
      "type": "f",
      "phase": 5,
      "description": "Rocket is wounded and, to save him, the Guardians go after the scientist who created him.",
      "consequence": "The original team breaks up. Quill goes back to Earth.",
      "summary": [
        "On Knowhere, the Guardians' headquarters, Peter Quill drinks because of Gamora. A golden being called Adam, created by the Sovereign, attacks and gravely wounds Rocket. The medicine doesn't work: there is a device in his heart that kills him if anyone tries to operate. The code that deactivates it is held by the company that made him.",
        "While his friends rush, Rocket, unconscious, remembers. He was a baby raccoon taken from Earth by a scientist, the High Evolutionary, who wants to create a perfect society of humanized animals and discards each attempt. In the cage he made three friends, other test subjects: an otter, a walrus and a rabbit. Rocket solved a flaw the creator couldn't. Instead of gratitude, he stirred up envy. The scientist decided to take out his brain and incinerate the batch. In the escape attempt, the three friends were killed. Rocket tore open the creator's face and fled in a ship.",
        "The Guardians break into the company's headquarters with the help of pirates, among them a Gamora: the 2014 one, who came to the present in Endgame and has no memory of Quill at all. They find Rocket's file, without the code. They follow it to Counter-Earth, a planet of humanized animals. The High Evolutionary considers it flawed and destroys it with all its inhabitants. The Sovereign high priestess dies there.",
        "Quill and Groot get the code from one of the scientist's assistants. Rocket's heart stops. He finds himself before the three friends, who say it is not yet time. Quill deactivates the device and revives him.",
        "Drax, Nebula and Mantis, trapped in the villain's ship, find hundreds of modified children in cages. The Guardians come back to get them out. All of Knowhere docks against the ship, and the dog Cosmo makes a bridge. Rocket finds cages of pups, raccoons among them, and reads his own species's name on the plaque. The High Evolutionary is defeated by everyone together. Rocket has him at his mercy and doesn't kill him. Quill is left behind, freezes in space and is rescued by Adam.",
        "The team breaks up. Quill hands command to Rocket and returns to Earth to see his grandfather again. Mantis leaves to find out who she is. Gamora goes back to the pirates. Drax and Nebula stay on Knowhere taking care of the children. Rocket leads a new lineup."
      ]
    },
    "invasao": {
      "title": "Secret Invasion",
      "original": "Secret Invasion",
      "year": 2023,
      "type": "s",
      "phase": 5,
      "description": "Nick Fury returns to Earth to face a faction of Skrulls, shapeshifting aliens who have infiltrated governments.",
      "consequence": "James Rhodes had been replaced by a Skrull, for a period the series doesn't make clear.",
      "summary": [
        "In 1995, Nick Fury promised the Skrulls, shapeshifting refugees, that he would find them a planet. Thirty years later, a million of them live hidden on Earth, with human faces. A young faction, led by Gravik, tired of waiting and wants the planet. The plan is to provoke a war between the United States and Russia. Fury, who spent years in space, returns at the request of his friend Talos, former leader of the Skrulls.",
        "In Moscow, Gravik sets off bombs at a public event, takes on Fury's face and kills Maria Hill in front of the cameras. Fury is blamed. Colonel James Rhodes, advisor to the president, sidelines him. It turns out Fury's wife is a Skrull and was ordered to kill him; the two reach an understanding. Talos's daughter, G'iah, is infiltrated among the rebels and passes information to her father.",
        "Gravik has a machine that gives Skrulls the powers of other beings. He attacks the president's convoy and kills Talos. The Rhodes next to the president is in fact a Skrull named Raava, who pushes him to bomb the rebels' base in Russia, which would start the war. What Gravik really wants is the Harvest: DNA samples from the Avengers, collected by Fury after the Endgame battle.",
        "Fury brings the Harvest to Gravik in exchange for sparing Earth. The one who delivers it, however, is G'iah with his face. The two receive the powers at the same time, and she kills him. Fury kills Raava, the president calls off the attack, and the real Rhodes is found, still in a hospital gown.",
        "The ending is bitter. The president declares every species from outside Earth an enemy, and civilians begin attacking anyone they suspect of being a Skrull. G'iah makes a deal with British intelligence. Fury returns to space with his wife, to negotiate peace with the Kree."
      ]
    },
    "loki2": {
      "title": "Loki (Season 2)",
      "original": "Loki",
      "year": 2023,
      "type": "s",
      "phase": 5,
      "description": "With the TVA cracked and the loom that sustains the timelines about to give way, Loki leaps through time uncontrollably trying to save the branches.",
      "consequence": "Loki destroys the loom and ends up holding every timeline himself, alone at their center. The TVA begins watching Kang variants.",
      "summary": [
        "Loki returns to the TVA and starts being dragged uncontrollably between past, present and future. He meets Mobius again and warns him about the He Who Remains variants. A technician, Ouroboros, finds the bigger problem: the Temporal Loom, a machine that turns raw time into timeline, is overloaded by the branches and about to give way. A general wants to go back to pruning them and destroys many, with billions of lives, before being stopped. Sylvie, who dropped everything, works at a McDonald's in 1982.",
        "Judge Renslayer and Miss Minutes, the TVA's talking clock, search in 1893 for a variant of the creator: Victor Timely, a stuttering, scheming inventor, to rule with him. At the Chicago World's Fair, everyone chases him. Loki and Mobius need his identity to open the Loom. Sylvie wants to kill him and, seeing him up close, gives up. Renslayer is sent to the end of time.",
        "It turns out that Renslayer commanded the creator's armies and that Miss Minutes erased the memory of all the employees. The two try to take over the agency and fail. Timely enters the platform to expand the Loom and is undone by the radiation in seconds. The Loom explodes.",
        "Loki survives, alone. The TVA is gone, and his friends are back in the lives they had before being taken: Mobius is a jet ski salesman with two sons, and none of them recognize him. Loki gathers them anyway. Sylvie makes him admit why he does it: he is afraid of being alone. The branches begin to come apart in threads. Loki discovers he can control his leaps through time.",
        "He goes back to the moment before the explosion and tries again, and again, for centuries, studying physics until he knows more than the technicians. Nothing works, because the branches are infinite. He then returns to the conversation with He Who Remains, who explains: the Loom is a lock. When it overloads, it erases everything but the original line. The choice is to kill Sylvie before she kills him, and keep the prison, or let everyone die.",
        "Loki finds another way out. He says goodbye to his friends, walks to the Loom and destroys it. He catches in his hands the threads of the lines that were dying and gives them life with his own magic. He climbs with them to the throne at the end of time and sits, while the branches grow around him in the shape of a tree. The TVA begins watching the creator's variants. Mobius resigns and goes to watch, from a distance, the family he would have had."
      ]
    },
    "marvels": {
      "title": "The Marvels",
      "original": "The Marvels",
      "year": 2023,
      "type": "f",
      "phase": 5,
      "description": "The powers of Carol Danvers, Monica Rambeau and Kamala Khan become entangled, and the three swap places every time they use them.",
      "consequence": "Monica ends up trapped in a parallel universe, where she meets the X-Men's Beast. Kamala starts recruiting young heroes.",
      "summary": [
        "Right after Captain Marvel, Carol Danvers destroyed the artificial intelligence that ruled the Kree empire. The result was a civil war: within thirty years, their planet, Hala, lost its air, water and sun. The Kree call her the Annihilator. Carol never told anyone about it.",
        "The new Kree leader, Dar-Benn, finds a bangle identical to Kamala Khan's and uses it to tear passages in the network of jump points that connects the galaxy. The first tear scrambles the powers of three people linked to light: when Carol, Monica Rambeau or Kamala use their power at the same time, they swap places. Carol shows up in Kamala's bedroom, Kamala in space, Monica in the middle of a fight. The Khans' living room is destroyed.",
        "The three meet at a Skrull refugee colony that Carol helped found. There Dar-Benn opens a tear that sucks the planet's air toward Hala. They evacuate whoever they can. Kamala names the trio the Marvels. Monica demands that Carol account for the thirty years she disappeared: she promised to come back when Monica was a child. Carol admits she was ashamed.",
        "Dar-Benn picks worlds Carol is fond of. The next is a water-covered planet where everyone speaks by singing and where Carol is married to the prince, as a matter of convenience. The water is sucked away. The last target is Earth's Sun. At Nick Fury's space station, kittens of the alien cat Goose swallow the crew to evacuate it.",
        "Dar-Benn takes Kamala's bangle and, with the two, opens a hole to another universe. The energy destroys her. To close it, someone has to do it from the other side. Carol and Kamala charge Monica with energy, and she goes through. Carol flies to Hala's sun and relights it.",
        "Carol moves into the Rambeaus' house, on Earth. Kamala looks for Kate Bishop to put together a team and mentions Cassie Lang. In the credits scene, Monica wakes up in a hospital. Beside the bed is her mother, alive, who doesn't know her and wears a hero's uniform. The doctor is the X-Men's Beast, who explains that she came from a parallel reality."
      ]
    },
    "eco": {
      "title": "Echo",
      "original": "Echo",
      "year": 2024,
      "type": "s",
      "phase": 5,
      "description": "Maya Lopez, a former head of a Kingpin faction, returns to her hometown in Oklahoma, hunted by the empire she helped build.",
      "consequence": "Wilson Fisk decides to run for mayor of New York.",
      "summary": [
        "The series opens with a Choctaw legend and goes back to 2007: a car accident kills Maya Lopez's mother and costs the girl, who is deaf, a leg. Her father takes her from Oklahoma to New York and becomes a commander in a gang of Wilson Fisk's, who treats Maya like a niece. Years later her father is killed by Ronin. Fisk takes her in as his right hand. As seen in Hawkeye, she finds out it was Fisk himself who arranged the death and shoots him in the face.",
        "Five months later, hunted by the organization, Maya returns to Tamaha, her hometown. She reunites with her uncle, cousin and nephew, and avoids her grandmother, who blames her for the accident. She wants to take over Fisk's empire and blows up one of his warehouses after hijacking a train. She starts having visions of ancestors, and her hands begin to glow.",
        "Fisk survived, blind in one eye. He goes to Tamaha and offers her everything he has, as his heir, if she comes back with him. Maya thinks about killing him and gives up when he tells her he killed his own father with a hammer, still a boy. She leaves without him.",
        "Fisk kidnaps her grandmother and cousin during the community's annual festival. The family fights back. Maya, dressed in what her grandmother sewed, shares the strength of the ancestors with her female relatives and, instead of killing Fisk, takes him back to that night of his childhood to try to take his pain away. He wriggles free, furious, and runs. Maya reconciles with her family. In the credits scene, on a plane, Fisk watches a debate on the New York mayoral election."
      ]
    },
    "deadpool": {
      "title": "Deadpool & Wolverine",
      "original": "Deadpool & Wolverine",
      "year": 2024,
      "type": "f",
      "phase": 5,
      "description": "The TVA tells Wade Wilson that his universe is about to end. To save it, he goes looking for a Wolverine from another reality.",
      "consequence": "Brings the universe of Fox's X-Men films into the MCU and explains anchor beings.",
      "summary": [
        "In 2018, Wade Wilson uses a time-travel device to go from his universe, Earth-10005, to the main MCU timeline and apply to the Avengers. Happy Hogan interviews him and turns him down. Six years later, separated from his girlfriend and without a costume, he sells used cars.",
        "On his birthday, he is taken by the TVA. An agent called Paradox offers him a place on the main timeline and explains why: Wade's universe is dying. Every universe depends on an anchor being, and the one there was Logan, Wolverine, who died. The fading takes thousands of years, and Paradox, without his bosses' authorization, built a machine to end it sooner. Wade turns the offer down, steals a device and goes through the multiverse looking for another Logan.",
        "After several, he brings back one that Paradox calls the worst of them all: in his world, he abandoned the X-Men, and all of them were killed while he drank. Paradox throws the two into the Void, the end-of-time dumping ground. There he sends Cassandra Nova, Charles Xavier's twin sister, a telepath discarded as a child, who has a deal with the TVA. Wade lies to Logan that the agency can fix his past, and the two team up, between brawls.",
        "They escape Cassandra and find a resistance group made up of heroes from old or never-made films: Elektra, Blade, Gambit and Laura, the young woman who accompanied the other Logan to his death. Laura convinces Logan to fight. Together, they break into Cassandra's base and immobilize her with a helmet that blocks telepathy. A traitor mortally wounds her. Logan insists on taking the helmet off so she can heal, and she, in return, opens a portal to Earth-10005.",
        "Cassandra learns about Paradox's machine and goes after it, wanting to use it to erase all timelines and leave only the Void. She summons an army of Deadpool variants. To shut the machine down, you have to interrupt the energy flow with your body, which kills anyone. Wade and Logan hold the cables together, hand in hand, share the load and survive. Cassandra is disintegrated.",
        "The TVA arrests Paradox and confirms that Earth-10005 has stopped dying. Wade asks them to change Logan's past, and the agent refuses: it was that past that made him who he is. Logan can stay. The two have dinner with Wade's friends, with Laura at the table."
      ]
    },
    "agatha": {
      "title": "Agatha All Along",
      "original": "Agatha All Along",
      "year": 2024,
      "type": "s",
      "phase": 5,
      "description": "Freed from Wanda's spell and without powers, Agatha Harkness gathers a coven to walk the Witches' Road. A mysterious teenager insists on coming along.",
      "consequence": "The teenager is Billy Maximoff, Wanda's son, living in another body. He sets out to look for his brother, Tommy.",
      "summary": [
        "Three years after WandaVision, Agatha Harkness is still in Westview, bound by Wanda's spell, convinced she is a detective in a crime series. A teenager breaks into the house. An FBI agent, Rio Vidal, who is a witch and has a past with Agatha, finishes breaking the enchantment. Agatha is free and powerless. Rio warns that seven vengeful witches are coming.",
        "The boy, whose name a spell keeps from being spoken, wants to walk the Witches' Road, a legendary path that gives whoever reaches the end what they lack. Agatha hurriedly puts together a coven: Lilia, a seer; Jen, a potions master; Alice, the daughter of a famous rock singer, a protection witch; and a Westview townsperson. They sing the ballad, a trapdoor opens, and they descend.",
        "The Road is a series of houses, each with a trial tied to one of them. In the first, poisoned wine; the townsperson dies. Rio takes her place. In the second, a recording studio and the demon that haunts Alice's family. In the third, a cabin and a seance: Agatha's mother possesses her, Alice tries to save her, and Agatha, by reflex, sucks Alice's magic out and kills her. The boy, furious, shows for the first time a power just like Wanda's.",
        "One episode tells who he is. William Kaplan, 13, was returning from his bar mitzvah party when the car hit Westview's barrier, which was falling. He died for a few moments. He woke up as someone else: the soul of Billy Maximoff, Wanda's son, had entered his body. Three years later, he wants to find his brother, Tommy.",
        "In Lilia's trial, it turns out that Rio is Death. Lilia sacrifices herself to destroy the seven pursuers. Death wants Billy, who to her is a life out of place. In the last trial, he uses his power to put Tommy's soul in the body of a boy who was drowning. Agatha, who has been running from Death for centuries, kisses her in Billy's place and dies.",
        "The finale tells the rest. In 1750, Agatha had a son, Nicholas, and Death gave her a few years with him. The two invented the ballad on the road. After he died, she spent centuries using the song to lure witches and steal their power. The Road never existed. This one was real because Billy, without knowing it, created it. He blames himself for the deaths. Agatha's ghost appears, and the two set out to look for Tommy."
      ]
    },
    "cap4": {
      "title": "Captain America: Brave New World",
      "original": "Captain America: Brave New World",
      "year": 2025,
      "type": "f",
      "phase": 5,
      "description": "Sam Wilson, now Captain America, is caught up in an international incident after an attack on President Thaddeus Ross. The dispute is over adamantium, a metal discovered on Celestial Island.",
      "consequence": "Ross becomes Red Hulk and ends up in prison. Sam decides to reassemble the Avengers. Samuel Sterns warns that other worlds are coming.",
      "summary": [
        "Five months after being elected president, Thaddeus Ross sends Sam Wilson and Joaquin Torres, the new Falcon, to recover a cargo stolen by mercenaries in Mexico. Sam hesitates to take Joaquin on dangerous missions, because neither of them has powers. The two train with Isaiah Bradley, the super-soldier the government held prisoner for decades.",
        "Ross invites Sam to the White House and asks him to reassemble the Avengers. Sam brings Isaiah. In front of heads of state, Ross reveals what the cargo was: adamantium, a metal found on the island that formed when a Celestial emerged in the Indian Ocean, stolen from a Japanese mine. He proposes a treaty to share the mining. In the middle of the speech, a song plays, and several men in the room, Isaiah among them, shoot the president. Afterward they remember nothing.",
        "Japan accuses Ross of the theft and the attack. Sam investigates against the president's orders and reaches a secret prison. Held there for many years was Samuel Sterns, the biologist contaminated with Banner's blood in Harlem, who ended up with extraordinary intelligence. Ross blamed him publicly for the disaster and kept him locked up, using him: Sterns planned his career all the way to the presidency and makes the pills that keep his diseased heart alive. The promised freedom never came. Sterns controls people by light and sound, and the song is the trigger.",
        "On the island, the United States and Japan dispute the metal with fleets. Sterns controls two American pilots, who attack the Japanese. Sam and Joaquin intercept the planes and convince Japan to back down; Joaquin is shot down and left in serious condition. Bucky Barnes shows up to comfort Sam.",
        "Sterns turns himself in. At a press conference, a recording exposes his relationship with the president. The pills contained gamma radiation: Ross loses control and becomes a red Hulk. He destroys part of the White House. Sam leads him to a cherry-blossom park, takes a beating, wounds him enough to be heard and talks about his daughter, Betty, with whom he used to walk there. Ross returns to normal.",
        "Isaiah is cleared, and the treaty is signed. Ross resigns and turns himself in to the Raft, where Sam and Betty visit him. Sam invites Joaquin, recovering, to join the Avengers. In the post-credits scene, Sterns, in prison, warns Sam that this is not the only world and that the others are on their way."
      ]
    },
    "demolidor": {
      "title": "Daredevil: Born Again",
      "original": "Daredevil: Born Again",
      "year": 2025,
      "type": "s",
      "phase": 5,
      "description": "Matt Murdock hung up the mask after the murder of his best friend, and Wilson Fisk got himself elected mayor of New York. Neither can leave the past alone. Two seasons, 2025 and 2026.",
      "consequence": "At the end of the second season, Vanessa Fisk is dead, Fisk accepts exile, the anti-vigilante task force is dismantled and Matt, who publicly revealed he is Daredevil, is in prison.",
      "summary": [
        "First season. Matt Murdock, Karen Page and Foggy Nelson are celebrating in a bar when Benjamin Poindexter, a former FBI agent who never misses a throw, kills Foggy on the sidewalk. Matt nearly kills him and hangs up the mask. A year later he has a different office and is dating a therapist, Heather Glenn. Karen moved away. Wilson Fisk, recovered from Maya's shot, is elected mayor of New York on an anti-vigilante platform. His wife, Vanessa, who ran the business in his absence, had a lover.",
        "Hector Ayala, who operates masked as White Tiger, breaks up a fight on the subway, and a corrupt cop is run over and killed by a train. Matt defends him and, to win, reveals the client's identity in court. Hector is acquitted and killed days later by a man wearing the Punisher's symbol. Matt looks for Frank Castle, who despises him for sparing his friend's killer.",
        "A serial killer who paints murals in blood kidnaps Hector's niece. Matt becomes Daredevil again to save her. Fisk uses the case to create a task force of police against vigilantes, with the Punisher's emblem, and pushes ahead with a plan for the Red Hook port. Vanessa has the lover killed at her husband's request. Matt finds out it was she who hired Poindexter to kill Foggy, because of something he knew about the port.",
        "Poindexter escapes from jail and, at a ball, shoots Fisk. Matt steps in front of the bullet. Fisk turns off the city's lights and orders Matt killed; Frank Castle and Karen protect him. Frank is captured. Fisk kills the police commissioner with his bare hands, declares martial law and arrests opponents. Matt starts gathering honest cops.",
        "Second season, six months later. Matt leads the resistance with Karen and the detective Jessica Jones. A ship brings weapons of war to the port, which Fisk turned into a free zone. Matt is unmasked in an attack, and Fisk asks the public to find him. Poindexter, released by Matt, starts killing task-force agents. In an attack on Fisk, Vanessa shoots at him, and a shard of glass hits her in the head. She dies after surgery. Fisk kills the surgeon.",
        "Matt and Jessica destroy the arsenal. Matt beats Fisk in a fight and spares him. Karen is arrested. At her trial, Matt calls the mayor as a witness, presents the recorded testimony of a murdered sailor and reveals publicly that he is Daredevil. The governor offers Fisk exile instead of prison. He still kills protesters before accepting. The task force is dismantled and its agents arrested. Matt and Karen try to start over, and he is arrested for what he did in the mask."
      ]
    },
    "thunder": {
      "title": "Thunderbolts*",
      "original": "Thunderbolts*",
      "year": 2025,
      "type": "f",
      "phase": 5,
      "description": "Yelena Belova and other expendable agents of Valentina de Fontaine fall into a trap set by their own boss. There they find Bob, a man with powers even he doesn't understand.",
      "consequence": "Valentina presents the group to the public as the New Avengers. Fourteen months later, a ship with the number 4 enters Earth's orbit.",
      "summary": [
        "Yelena Belova is worn out. She does dirty jobs for Valentina de Fontaine, director of the CIA, and destroys a lab in Malaysia for her. Valentina is erasing the evidence of an illegal project at her company, the Sentry, because she faces impeachment proceedings in Congress. Yelena asks for more public work. Valentina promises one last mission.",
        "The mission is a vault in the desert. John Walker, Ava Starr and Antonia Dreykov arrive too, each with orders to kill another. Ava kills Antonia. It was a cleanup: the vault will incinerate everyone. In the middle of the room, in a capsule, a man in pajamas with no memory wakes up, Bob. Anyone who touches him relives the worst memory of their life. The four escape together. Bob draws the soldiers' fire so the others can flee, isn't hurt, rises into the sky by accident and falls.",
        "Bob is the only survivor of the Sentry Project, an attempt to manufacture a hero. Valentina takes him to the old Avengers Tower in New York and decides to present him to the press as her savior. Alexei Shostakov, the Red Guardian, who heard the plan while working as a driver, picks up Yelena, Walker and Ava. Walker names the group the Thunderbolts, the name of Yelena's childhood soccer team. Congressman Bucky Barnes, who is investigating Valentina, captures them to have them testify and, tipped off by her assistant about Bob, takes them to New York.",
        "At the tower, Bob, in a golden uniform, beats everyone in seconds and lets them go, since he doesn't see them as a threat. The power goes to his head, and he turns on Valentina. The assistant triggers an emergency device, and it releases the Void: the part of Bob made of depression and self-loathing. A shadow covers Manhattan, and everyone it touches turns into a silhouette, stuck in the worst memory they have.",
        "Yelena understands that this can only be solved from the inside and enters the shadow. She passes through her own memories of the Red Room and finds Bob hiding in his childhood bedroom, where he used to shelter from his father. The others follow her in. They go through the abuse and the drugs with him, all the way to the lab where it all began. There the Void overwhelms them. The more Bob hits it, the more he is swallowed. They hug him and say they are there. The light returns.",
        "The group goes to arrest Valentina. She opens a door, and on the other side is a press conference: she presents them as the New Avengers and takes the credit. They accept the role, and Yelena tells her in her ear that now she belongs to them.",
        "Post-credits scene, fourteen months later. The New Avengers, with Bob, discuss the fight with Sam Wilson, who has his own team and is suing them over the use of the name. An alarm shows a ship from outside this dimension entering orbit, with a 4 on its hull."
      ]
    },
    "coracao": {
      "title": "Ironheart",
      "original": "Ironheart",
      "year": 2025,
      "type": "s",
      "phase": 5,
      "description": "Riri Williams, a genius from Chicago expelled from MIT, builds her own armor and gets involved with a gang led by a man who uses magic.",
      "consequence": "Introduces Mephisto, a demonic figure who makes pacts.",
      "summary": [
        "Riri Williams, an MIT student, is expelled for selling papers to classmates to fund her armor. She goes back to Chicago. Five years earlier, her best friend, Natalie, and her stepfather were killed in a shooting outside the family workshop, and she never grieved. A stranger recruits her for the crew of Parker Robbins, the Hood, who wears a cloak that can make him invisible and deflect bullets. Riri accepts three heists to pay for her project.",
        "Trying to rebuild the armor's artificial intelligence, she scans her own brain, and what is born is a copy of Natalie, with her voice and manner. The crew sabotages millionaires' companies and forces the owners to put them on the payroll. To get parts, Riri blackmails a shy salesman, Joe, who turns out to be Ezekiel Stane, son of Obadiah Stane, the villain of the first Iron Man. With each use of the cloak, black veins climb up Parker's body.",
        "Riri discovers that Parker had the crew member she replaced killed and, on a heist, cuts a piece off the cloak to study. A colleague tries to kill her and dies in the trap. Riri's mother takes her to a magic shop, where they identify the cloak as an object from a shadowy dimension. Parker orders Riri killed. Stane, arrested because of her and later fitted with implants by the gang, dismantles her armor and spares her. The Natalie copy is erased.",
        "Riri builds a new armor in her stepfather's workshop, with spells engraved in the metal, and defeats Parker, who is left without power. One episode shows where the cloak came from: a man offered him power, respect and wealth, and he accepted.",
        "The man appears to Riri. He is Mephisto. He offers whatever she wants, and she, on the condition that the people she loves are spared, accepts. In the workshop, Natalie is back, alive. The same black veins begin to climb up Riri's arm."
      ]
    },
    "quarteto": {
      "title": "The Fantastic Four: First Steps",
      "original": "The Fantastic Four: First Steps",
      "year": 2025,
      "type": "f",
      "phase": 6,
      "description": "On a retro-futuristic 1960s Earth, Earth-828, the Fantastic Four are the only team of heroes. Sue Storm is pregnant when a silver herald announces that Galactus is coming to devour the planet.",
      "consequence": "Franklin Richards is born, a child with enormous power. Four years later, a man in a green hood, holding a metal mask, visits the boy.",
      "summary": [
        "Earth-828, 1964. It has been four years since the astronauts Reed Richards, Sue Storm, Johnny Storm and Ben Grimm returned from space with powers, after being hit by cosmic rays. They are heroes, scientists and celebrities. The world has advanced a great deal thanks to them, and Sue's foundation has convinced a good part of the countries to live in peace. Reed and Sue find out they are going to have a child, and the public wonders whether the baby will have powers.",
        "Months later, a silver woman on a board lands in New York and announces that the planet has been marked to be consumed by Galactus. Reed confirms: whole planets have been disappearing. The Four follow her trail through space and arrive just after a world is devoured. Captured, they are taken to Galactus, who explains a hunger that never passes. He senses a cosmic power in Sue's baby and proposes sparing Earth in exchange for the child. He induces labor. The team refuses and flees, with the Surfer behind them. Sue gives birth to Franklin on the ship.",
        "A month later, Reed tells everything at a press conference. The world revolts: a family chose one baby over billions. With Galactus on his way and protests in the streets, Sue comes down with her son in her arms and speaks to the crowd. They will not hand over the child and they will not abandon anyone. Reed proposes moving the entire planet to another solar system, with teleportation bridges on every continent. Sue convinces the countries to build them.",
        "Johnny deciphers the Surfer's language from recordings of destroyed worlds. When the bridges link up, she returns and destroys them one by one. Johnny stops her at the last one, in Times Square, calling her by name: Shalla-Bal. She serves Galactus to spare her own planet. On hearing the voices of the worlds she helped kill, she hesitates and leaves.",
        "The plan changes: use the remaining bridge to send Galactus far away, with Franklin as bait. Sue negotiates with the ruler of an underground city for shelter for the New Yorkers. Galactus doesn't fall for the trap, crosses the city and grabs the baby. Sue pushes him toward the portal with a force field, spending everything she has, while Reed rescues his son. Johnny goes to give the last push at the cost of his life, and Shalla-Bal takes his place, crossing over with Galactus. Sue dies. Franklin, in her arms, brings her back.",
        "Mid-credits scene, four years later. Sue reads to Franklin at home, goes to get another book and, on returning, finds the boy facing a man in a green cape, who holds a metal mask. The face is not shown."
      ]
    },
    "magnum": {
      "title": "Wonder Man",
      "original": "Wonder Man",
      "year": 2026,
      "type": "s",
      "phase": 6,
      "description": "Simon Williams, an unlucky actor in Hollywood, competes for the lead role in the remake of a superhero film while hiding that he has real powers. Trevor Slattery becomes his scene partner.",
      "consequence": "A standalone story, with no known connection to Doomsday.",
      "summary": [
        "Simon Williams is an actor in Los Angeles, talented and difficult, who loses roles by arguing over every scene. Since childhood he has hidden that he has powers: an energy that explodes when he loses control. In Hollywood that ends any career. There is an industry rule that bans people with powers from working on film sets, created after an actor able to pass through matter made a colleague disappear inside him.",
        "Fired from a horror series, Simon gets an audition for the lead in the remake of Wonder Man, a superhero film he loved as a boy. He befriends Trevor Slattery, the actor who posed as the Mandarin, was taken from prison by the Ten Rings and returned to Hollywood wanting a second chance. A Damage Control agent grows suspicious of Simon and keeps watch on him. The powers show up during a tense audition.",
        "The two win the roles, and filming begins. A set is destroyed. Trevor takes the blame: he presents himself again as a dangerous terrorist to protect his friend and is taken to a maximum-security Damage Control prison.",
        "Simon concludes that success is worth nothing if he can't protect the people who matter. He spends weeks studying an ordinary employee of the agency, as he would study a character, enters the prison in his place and uses his powers openly for the first time, flying included. He gets Trevor out. A lot of people now know what he is. There is no post-credits scene or known connection to Doomsday."
      ]
    },
    "justiceiro": {
      "title": "The Punisher: One Last Kill",
      "original": "The Punisher: One Last Kill",
      "year": 2026,
      "type": "e",
      "phase": 6,
      "description": "A special of about an hour. Frank Castle, isolated and on the brink of giving up, has a bounty put on his head by a mob boss.",
      "consequence": "Frank returns to the streets as the Punisher. He appears next in Spider-Man: Brand New Day.",
      "summary": [
        "A special of about an hour, set at the same time as the second season of Daredevil: Born Again, after Frank Castle escaped from Mayor Fisk's prison. He lives in a run-down building and sees people from his past who aren't there. He locks away his Punisher gear and goes to his family's grave to kill himself. A vision of his daughter stops him.",
        "On the street, the mob boss Ma Gnucci corners him and warns that she has put a bounty on his head. At home, he imagines Karen Page, who calls him out on his failures and comforts him. Criminals from all over the region storm the building looking for him, attack residents and set his apartment on fire. Frank kills his way through to the roof and jumps.",
        "He could go after Gnucci. Instead, he stays to protect a shopkeeper, his wife and their daughter. The girl gives him a paper rose, which he leaves on his daughter's grave. He concludes he still has work to do. He returns to the streets with a new uniform and arsenal and kills the head of a group that was attacking innocents. This is the Frank who appears in Spider-Man: Brand New Day."
      ]
    },
    "aranha4": {
      "title": "Spider-Man: Brand New Day",
      "original": "Spider-Man: Brand New Day",
      "year": 2026,
      "type": "f",
      "phase": 6,
      "description": "Four years after No Way Home, Peter Parker is an anonymous adult protecting New York alone, since no one remembers he exists. A series of attacks on government prisons puts him on the trail of the Punisher, Bruce Banner and a young telepath.",
      "consequence": "Jean Grey comes to exist in the MCU and leaves New York. Peter gets organic webbing, grows close to Ned and MJ again without them recovering their memories, and decides to stop acting alone. The post-credits scene records a Spider-Man off Earth.",
      "summary": [
        "Four years after the spell, no one knows who Peter Parker is. He protects New York as Spider-Man, fights the Scorpion and ninjas, has earned a detective's trust and visits his aunt's grave. While chasing a stolen tank, he stops Frank Castle from causing a disaster. The tank crashes into a Department of Damage Control prison. The driver was possessed: a telepath jumps from body to body to break the Scorpion out of jail. The only mind she can't get into is Peter's.",
        "Yelena Belova warns Peter that several of the agency's facilities have been attacked by someone looking for something called V-Max. The director denies knowing what it is. MJ and Ned return from MIT, and Peter sees her kiss her boyfriend. The next morning, his senses are stronger and webbing comes out of his wrists. In a new attack, he loses control, beats the Scorpion and injures a police officer.",
        "He looks for Bruce Banner, now a university professor, who keeps the Hulk contained with an inhibitor and helps him make one for himself. Meanwhile, the telepath finds Peter's apartment, reads a letter he wrote to MJ and never sent, and nearly kills her. Peter saves her and finds out who she is: a young woman, Jean Grey. He hides MJ on Castle's boat, where she helps finish the inhibitors.",
        "Jean attacks the agency's headquarters inside Banner's body, rips off his inhibitor and unleashes the Hulk. Peter fights the Hulk and calms him, while she uses Castle to open a vault. Peter puts an inhibitor on her, and the director sedates her. Before passing out, she says a name: Sara. MJ found the letter. Peter apologizes for never telling her and says he loves her. She doesn't remember him and doesn't return the feeling, but invites him to the apartment she shares with Ned, where he, masked, gets along with both. Yelena finds in the files who Sara is: Jean's older sister, also a telepath, kidnapped by the agency.",
        "At a facility on Roosevelt Island, the director experiments on Jean. She understands what V-Max was: the worn label on the vent of the cell, the last thing Sara saw before she died and passed on to her sister. Enraged, she creates a field that paralyzes everyone inside it, except Peter, and hurls the ninjas at him. Peter takes off the inhibitor, accepts his powers and stops her from killing the director.",
        "He lets her into his mind. She sees the memory of Aunt May saying she loves him as he is, and the two recognize each other in loss. Castle shoots Jean from a distance; Peter steps in front and is left between life and death. She undoes the field and keeps him alive from afar. Then she leaves the city. The director disappears, and the agency comes under investigation.",
        "At his aunt's grave, Peter promises to stop doing everything alone. He reintroduces himself to Ned with their old handshake. In the post-credits scene, Ned's app, which tracks Spider-Man sightings, records one off Earth."
      ]
    },
    "visionquest": {
      "title": "VisionQuest",
      "original": "VisionQuest",
      "year": 2026,
      "type": "s",
      "phase": 6,
      "description": "The white Vision tries to recover his memory and his humanity. It closes the trilogy begun in WandaVision and continued in Agatha All Along. Ultron is back.",
      "consequence": "Premieres on October 14, 2026 on Disney+.",
      "upcoming": true,
      "summary": [
        "Premieres on October 14, 2026. According to the promotion, it follows the white Vision, rebuilt without memories at the end of WandaVision, trying to recover his memory and his humanity. The announced cast brings back Ultron and gives human form to Tony Stark's artificial intelligences, such as J.A.R.V.I.S. and F.R.I.D.A.Y. Tommy Maximoff, Wanda's other son, appears.",
        "It is presented as the end of a trilogy begun in WandaVision and continued in Agatha All Along. This guide will be updated when the series ends."
      ]
    },
    "doomsday": {
      "title": "Avengers: Doomsday",
      "original": "Avengers: Doomsday",
      "year": 2026,
      "type": "f",
      "phase": 6,
      "description": "The multiverse is collapsing, and heroes from three universes meet: the Avengers, the New Avengers and Wakanda, from the main Earth; the Fantastic Four, from Earth-828; and the X-Men of the Fox films. In their way stands Victor von Doom, Doctor Doom. It takes place fourteen months after Thunderbolts*.",
      "consequence": "Premieres on December 18, 2026.",
      "upcoming": true,
      "summary": [
        "It has not premiered yet. What is known is gathered in the Before Doomsday section, at the top of the page: the announced premise, the cast, what the trailers showed and the open questions."
      ]
    },
    "guerras": {
      "title": "Avengers: Secret Wars",
      "original": "Avengers: Secret Wars",
      "year": 2027,
      "type": "f",
      "phase": 6,
      "description": "A direct sequel to Doomsday and the end of the Multiverse Saga.",
      "consequence": "Scheduled for December 17, 2027.",
      "upcoming": true,
      "summary": [
        "Scheduled for December 17, 2027, with the same directors and writers as Doomsday. It is the conclusion of the Multiverse Saga. The title comes from two comic book stories in which heroes from many worlds end up gathered on a single planet, Battleworld; in the 2015 version, the one who rules that planet is Doctor Doom. Marvel has not revealed the plot."
      ]
    }
  },
  "watch": {
    "short": [
      "estranho2",
      "cap4",
      "thunder",
      "quarteto"
    ],
    "list": [
      {
        "id": "xmen1",
        "minutes": 104,
        "why": "Professor X, Magneto, Cyclops and Mystique from this cast are in Doomsday."
      },
      {
        "id": "xmen2",
        "minutes": 134,
        "why": "Introduces Nightcrawler, also in the cast, and the forced alliance between the X-Men and Magneto."
      },
      {
        "id": "cap1",
        "minutes": 124,
        "why": "Chris Evans and Hayley Atwell are in the Doomsday cast."
      },
      {
        "id": "ving1",
        "minutes": 143,
        "why": "The original lineup and the first appearance of Thanos."
      },
      {
        "id": "ginfinita",
        "minutes": 149,
        "why": "The biggest event of the first saga, from the same directors as Doomsday."
      },
      {
        "id": "ultimato",
        "minutes": 181,
        "why": "Closes the first saga and explains where each original Avenger ended up."
      },
      {
        "id": "loki1",
        "minutes": 570,
        "why": "It is where the multiverse is born and where it is explained why it hasn't collapsed yet. Two seasons, 12 episodes.",
        "name": "Loki (Seasons 1 and 2)"
      },
      {
        "id": "shangchi",
        "minutes": 132,
        "why": "Simu Liu is in the cast, and the signal from the rings has never been explained."
      },
      {
        "id": "aranha3",
        "minutes": 148,
        "why": "The MCU's first direct contact with other cinematic universes."
      },
      {
        "id": "estranho2",
        "minutes": 126,
        "why": "Explains incursions, the central danger of the saga's final stretch."
      },
      {
        "id": "wakanda",
        "minutes": 161,
        "why": "Shuri, M'Baku and Namor are in the Doomsday cast."
      },
      {
        "id": "deadpool",
        "minutes": 128,
        "why": "Links Fox's X-Men to the MCU. Deadpool and Wolverine are not in the announced cast."
      },
      {
        "id": "cap4",
        "minutes": 118,
        "why": "Shows Sam Wilson as a leader and why the Avengers exist again."
      },
      {
        "id": "thunder",
        "minutes": 127,
        "why": "Forms the New Avengers and ends on the scene that leads straight to Doomsday."
      },
      {
        "id": "quarteto",
        "minutes": 115,
        "why": "Introduces the Fantastic Four and has the only Doctor Doom scene so far."
      }
    ]
  },
  "sagas": [
    {
      "id": "infinito",
      "name": "Infinity Saga",
      "years": "2008–2019",
      "phases": [
        1,
        2,
        3
      ],
      "text": [
        "It is 23 films, released over eleven years, that tell a single story. At first nobody notices: each film introduces a hero and works on its own. What ties them together are two things planted little by little. The first is [[fury|Nick Fury]], director of a spy agency, who shows up after the credits recruiting people for a team. The second is six objects of absurd power, the [[joias|Infinity Stones]], which appear one per film without the characters knowing they are part of a set.",
        "The one who knows is [[thanos|Thanos]]. He spends almost the entire saga offscreen, sending others to fetch the Stones, and only at the end decides to act in person. His plan is to gather all six and wipe out half of all life in the universe with a snap of his fingers, because he believes that is the only way what remains will have the resources to live.",
        "The saga has three movements, one per phase. In the first, the heroes meet and form the [[vingadores|Avengers]]. In the second, they discover that protecting the world has a cost, make serious mistakes and begin to disagree about who should control them. In the third, the disagreement turns into a split just as Thanos arrives. They lose, and the last film is about the price of undoing the defeat.",
        "For anyone going to see Doomsday, what the Infinity Saga leaves behind is above all a cast and an absence. The heroes the audience followed for ten years have died, retired or gone away, and the world was marked by five years in which half of the people did not exist."
      ]
    },
    {
      "id": "multiverso",
      "name": "Multiverse Saga",
      "years": "2021–2027",
      "phases": [
        4,
        5,
        6
      ],
      "text": [
        "The second saga starts from two questions. Who takes the place of the original Avengers? And what happens when it turns out this universe is just one among infinite?",
        "The answer to the first is a new generation, introduced one title at a time: [[sam|Sam Wilson]] inherits Captain America's shield, [[yelena|Yelena Belova]] fills Natasha's space, [[shuri|Shuri]] becomes the Black Panther, and a wave of teenagers shows up without anyone bringing them together. For almost the entire saga there is no team called the Avengers.",
        "The answer to the second is the [[multiverso|multiverse]]. One series, Loki, explains that time was kept on a single line by force and shows the moment that lock breaks. From then on, [[variantes|variants]] appear, versions of the same person from other universes, along with a new danger, [[incursoes|incursions]], in which two universes collide and destroy each other.",
        "It is a more scattered saga than the last one. It has twice as many titles, many of them series, and several are connected to nothing. The villain also changed midway: the plan was [[kang|Kang]], a conqueror of timelines, and since 2024 it has become [[doom|Doctor Doom]]. That is why there are threads that were never tied up. This guide says which ones.",
        "The multiverse also served to bring in characters from other studios. The Spider-Men of the older films, Fox's [[xmen|X-Men]] and [[deadpool|Deadpool]] entered the story as visitors from other universes. The saga ends in two Avengers films: Doomsday, in December 2026, and Secret Wars, in December 2027."
      ]
    }
  ],
  "phases": {
    "0": {
      "name": "Outside the MCU",
      "short": "Fox",
      "subtitle": "Fox's X-Men",
      "years": "2000–2003",
      "aside": "Fox's X-Men",
      "text": [
        "The X-Men films produced by Fox are not part of the MCU. They were made by another studio before Disney bought it, and they take place in another universe. They are in this guide because the original cast returns in Doomsday and because the first two films are on the list that Disney+ published for the release.",
        "The essentials fit in a few lines. [[mutantes|Mutants]] are people born with powers who are feared for it. [[xavier|Charles Xavier]], a telepath, runs a [[escolax|school]] that shelters them and a team, the [[xmen|X-Men]], who stand for coexistence with humans. [[magneto|Magneto]], his oldest friend, survived the Holocaust and believes humans will do to mutants what they did to his people; that is why he prefers to strike first. The two respect each other and spend their lives on opposite sides.",
        "In the first film, Magneto tries to turn world leaders into mutants by force. In the second, a military man named Stryker tries to exterminate mutants using Xavier himself, and the two factions join forces to stop him. [[jean|Jean Grey]] dies saving the team. It is also where we learn that [[wolverine|Wolverine]]'s [[adamantium|adamantium]] skeleton was implanted by Stryker."
      ],
      "keep": [
        "This is where Professor X, Magneto, Cyclops, Mystique, Nightcrawler and Beast come from, all in the Doomsday cast.",
        "The relationship between Xavier and Magneto is what the MCU is expected to build on without retelling."
      ]
    },
    "1": {
      "name": "Phase 1",
      "short": "P1",
      "subtitle": "Avengers Assembled",
      "years": "2008–2012",
      "text": [
        "It all starts with [[stark|Tony Stark]], heir to a weapons factory, kidnapped in Afghanistan by a group using the weapons he himself sold. To escape, he builds a suit of armor inside a cave. He returns home determined to stop making weapons and perfects the armor. At the end of the first film, instead of hiding his identity, he tells the world he is Iron Man. That night [[fury|Nick Fury]] shows up at his house to talk about an initiative.",
        "The others are introduced one by one. [[hulk|Bruce Banner]] is a scientist who tested on himself what he thought was research into gamma radiation resistance. It was an Army attempt to recreate a World War II serum, and he began turning into the Hulk; he lives on the run from General [[ross|Thaddeus Ross]], who wants to use him as a weapon. [[thor|Thor]] is the prince of [[asgard|Asgard]], exiled to Earth by his father, [[odin|Odin]], for arrogance; while he learns to be worthy of the hammer, his brother [[loki|Loki]] discovers he was adopted and tries to take the throne, fails and lets himself fall into space.",
        "[[steve|Steve Rogers]] is the oldest of them all. In 1942, thin and sickly, he is accepted into a secret program and receives the [[soro|super-soldier serum]]. As Captain America, he takes on [[hidra|Hydra]], the Nazi science division led by the [[caveira|Red Skull]], which has found an energy cube called the Tesseract. Steve loses his best friend, [[bucky|Bucky Barnes]], on a mission, defeats the Skull and crashes a plane full of bombs in the Arctic. He is found frozen and wakes up almost seventy years later, having missed a date with [[peggy|Peggy Carter]].",
        "In [[t:ving1|The Avengers]] the pieces come together. Loki, who found [[thanos|Thanos]] after his fall, arrives on Earth with a scepter that controls minds and the promise of an army. He steals the Tesseract from [[shield|S.H.I.E.L.D.]] and uses it to open a portal over [[ny|New York]]. Fury gathers Stark, Rogers, Thor, Banner and his two agents, [[natasha|Natasha Romanoff]] and [[clint|Clint Barton]]. They don't get along until the death of an agent everyone liked, [[coulson|Phil Coulson]], forces them to act together. They win the battle, and Stark nearly dies carrying a nuclear missile to the other side of the portal.",
        "What no one on the team knows is that the Tesseract and the scepter hold two [[joias|Infinity Stones]], the [[espaco|Space]] and the [[mente|Mind]] Stones, and that the owner of the army has already turned his eyes toward Earth."
      ],
      "keep": [
        "The world finds out that aliens and gods exist. The Battle of New York becomes ground zero for almost everything that follows.",
        "Stark comes out traumatized and obsessed with preparing Earth for the next invasion.",
        "The Tesseract goes to Asgard with Thor. Loki's scepter stays on Earth, under S.H.I.E.L.D. guard.",
        "Steve Rogers is a man out of his time, working for an agency he still trusts."
      ]
    },
    "2": {
      "name": "Phase 2",
      "short": "P2",
      "subtitle": "The Cost of Protecting the World",
      "years": "2013–2015",
      "text": [
        "The phase begins with each hero dealing with what happened in New York. Stark doesn't sleep and builds dozens of suits. Thor takes on the Dark Elves, who want a substance called the Aether, and loses his mother; in the end, Loki fakes his own death and begins ruling Asgard disguised as Odin. The Aether is the [[realidade|Reality]] Stone.",
        "The hardest blow comes in [[t:cap2|The Winter Soldier]]. Steve Rogers discovers that Hydra was never destroyed: Nazi scientists recruited by the United States after the war infiltrated S.H.I.E.L.D. from its founding and grew inside it for decades. The assassin they use, the Winter Soldier, is Bucky Barnes, alive, with a metal arm and his memory wiped after every mission. To stop Hydra, Steve, Natasha and a veteran named [[sam|Sam Wilson]] bring down the whole agency. The Avengers are left without anyone to coordinate them.",
        "In space, [[t:gg1|Guardians of the Galaxy]] introduces [[quill|Peter Quill]], [[gamora|Gamora]], [[drax|Drax]], [[rocket|Rocket]] and [[groot|Groot]], a band of criminals who end up protecting the [[poder|Power]] Stone from a fanatic in the service of Thanos. The film also shows Thanos for the first time, seated on his throne, and reveals that Gamora and [[nebulosa|Nebula]] are his adopted daughters.",
        "[[t:ving2|Age of Ultron]] is the direct consequence of Stark's fear. The Avengers recover Loki's scepter at a Hydra base in [[sokovia|Sokovia]], where experiments with it gave powers to the twins [[wanda|Wanda]] and Pietro Maximoff. Stark and Banner use the Stone inside the scepter to create a defensive artificial intelligence. [[ultron|Ultron]] wakes up, concludes that humanity is the threat and tries to cause an extinction by lifting an entire city to drop it like a meteor. The team defeats him with the help of a being created in the middle of the crisis, [[visao|Vision]], who carries the Mind Stone on his forehead. Pietro dies, Sokovia is destroyed and Banner disappears.",
        "The phase ends with a small film, [[t:hformiga|Ant-Man]], which introduces [[scott|Scott Lang]] and a place that will only matter years later, the [[quantico|Quantum Realm]]."
      ],
      "keep": [
        "S.H.I.E.L.D. ceases to exist. The Avengers begin acting on their own, financed by Stark.",
        "Bucky Barnes is alive and on the run, and Steve won't give up on him.",
        "Sokovia becomes the symbol of the damage the heroes cause. It is the argument for the accords of the next phase.",
        "Four Stones have appeared so far: Space, Mind, Reality and Power. Thanos decides to go after them in person."
      ]
    },
    "3": {
      "name": "Phase 3",
      "short": "P3",
      "subtitle": "The Fall and the Price of Return",
      "years": "2016–2019",
      "text": [
        "In [[t:gcivil|Civil War]], after yet another mission with civilians killed, 117 countries sign the [[acordos|Sokovia Accords]], which put the Avengers under UN control. Stark, guilty over Ultron, supports them. Steve, who watched S.H.I.E.L.D. be taken over from the inside, refuses. A bombing kills the king of [[wakanda|Wakanda]] and is blamed on Bucky; the king's son, [[tchalla|T'Challa]], sets out to avenge him. The real culprit is [[zemo|Helmut Zemo]], a Sokovian who lost his family and wants to watch the Avengers destroy themselves. He succeeds: he shows Stark that it was the Winter Soldier who killed his parents in 1991, and that Steve knew. The team splits in two. This film also debuts a teenager from Queens recruited by Stark, [[peter|Peter Parker]].",
        "While the Avengers are apart, the rest of the cast enters. [[strange|Stephen Strange]], a surgeon who lost the use of his hands, learns magic at [[kamartaj|Kamar-Taj]] and comes to guard the [[tempo|Time]] Stone. T'Challa takes the throne and, after facing his cousin [[killmonger|Killmonger]], opens Wakanda to the world. Thor discovers a sister, [[hela|Hela]], loses his father, his hammer and an eye, and has to let Asgard be destroyed in order to defeat her; he leaves in a ship with what remains of his people.",
        "That ship is what Thanos attacks in the first scene of [[t:ginfinita|Infinity War]]. He already has the Power Stone. He kills Loki, takes the Space Stone and moves on. He takes the Reality Stone from a collector. To get the [[alma|Soul]] Stone, on a planet called [[vormir|Vormir]], he must sacrifice someone he loves and throws Gamora off a cliff. On [[tita|Titan]], Stark, Strange, Peter and the Guardians nearly pull off his gauntlet, but Quill loses control on learning about Gamora. Strange, who looked at millions of futures, hands over the Time Stone in exchange for Stark's life. In Wakanda, Wanda destroys the Mind Stone and kills Vision to stop him; Thanos turns back time, rips out the Stone and snaps his fingers.",
        "Half of all living beings turn to dust. Peter, T'Challa, Strange, Wanda, Bucky, Sam and almost all the Guardians vanish. The six original Avengers remain.",
        "[[t:ultimato|Endgame]] begins with a false solution. The survivors find Thanos weeks later, but he has already destroyed the Stones, and Thor kills him without that changing anything. Five years pass. Scott Lang, who had been trapped in the Quantum Realm, returns with the idea that time runs differently there. Stark turns that into [[viagem|time travel]], and the team splits up to get the Stones at moments in the past: New York in 2012, Asgard in 2013, space in 2014. The Soul Stone costs Natasha her life; she sacrifices herself on Vormir in Clint's place.",
        "Banner uses the Stones and brings everyone back. But a 2014 Thanos found out about the plan and came to the present with his army. In the final battle, with all the heroes of the saga on the field, Stark takes the Stones and uses them to wipe out Thanos, knowing he would not survive. Steve returns each Stone to its time, decides to stay in the past with Peggy and reappears as an old man to hand the shield to Sam.",
        "The epilogue is [[t:aranha2|Far From Home]]: Peter Parker, grieving for Stark, is tricked by [[mysterio|Mysterio]], who before dying reveals to the world who Spider-Man is."
      ],
      "keep": [
        "The [[blip|Blip]]: half the universe vanishes for five years and comes back, the same age, to a world that moved on without them.",
        "Tony Stark and Natasha Romanoff are dead. Steve Rogers retired in the past. Thor went into space. There are no more Avengers.",
        "The Infinity Stones were destroyed. The ones that came from the past were returned.",
        "During the trip to 2012, a Loki from that year escaped with the Tesseract. It is the start of the Multiverse Saga.",
        "Peter Parker's identity is public."
      ]
    },
    "4": {
      "name": "Phase 4",
      "short": "P4",
      "subtitle": "Grief, Heirs and the Lock That Breaks",
      "years": "2021–2022",
      "text": [
        "The phase opens with people trying to live after loss. [[wanda|Wanda]], who saw [[visao|Vision]] die twice, arrives at a small town called [[westview|Westview]] and, in an outburst of grief, turns it into a TV series in which the two are married and have twin sons. Thousands of residents are trapped in the fantasy. A witch, [[agatha|Agatha Harkness]], reveals to Wanda what she is: the Scarlet Witch, able to create and undo reality. Wanda undoes the town, loses the invented family and vanishes with the [[darkhold|Darkhold]], a book of magic that corrupts whoever reads it.",
        "[[sam|Sam Wilson]] thinks the shield isn't for him and hands it to the government, which names another Captain America, [[walker|John Walker]]. Walker collapses under the pressure and kills a surrendered man in front of the cameras. Sam, alongside [[bucky|Bucky]], decides to take up the post his own way. Behind the scenes, an agent named [[valentina|Valentina de Fontaine]] starts recruiting expendable people, among them Walker and [[yelena|Yelena Belova]], raised as Natasha's sister.",
        "The defining event of the saga is in [[t:loki1|Loki]]. The Loki who escaped in 2012 is arrested by the [[tva|TVA]], a bureaucracy outside of time that eliminates any deviation from the planned script. With [[sylvie|Sylvie]], a variant of himself, he finds out who created it: [[kang|He Who Remains]], a man who won a war between versions of himself and has since kept a single timeline so they won't return. Sylvie kills him. The timelines branch out of control, and the multiverse comes into real existence.",
        "The consequences soon show up. In [[t:aranha3|No Way Home]], Peter asks Strange for a spell to make the world forget his identity; the spell goes wrong and pulls in villains and two other Spider-Men from other universes. Peter loses his aunt and, to close the rifts, accepts that the whole world will forget him. In [[t:estranho2|Multiverse of Madness]], Wanda, corrupted by the Darkhold, hunts [[america|America Chavez]], a teenager who crosses universes, to reach a world where her children exist. Strange learns there what [[incursoes|incursions]] are. Wanda comes to her senses and brings down on herself the temple the book came from.",
        "Around this, the phase introduces heirs. [[kate|Kate Bishop]] becomes Clint's partner. [[shangchi|Shang-Chi]] inherits ten rings of unknown origin. [[kamala|Kamala Khan]] gets powers and is called a mutant. Thor adopts a girl. In [[t:wakanda|Wakanda Forever]], T'Challa dies of illness, and [[shuri|Shuri]] takes up the mantle while facing [[namor|Namor]], king of an underwater people. And [[t:eternos|Eternals]] leaves a gigantic petrified being in the middle of the ocean, which no title comments on for years."
      ],
      "keep": [
        "The multiverse is open. There is no one left to keep a single timeline.",
        "No one in the world remembers that Peter Parker exists.",
        "Wanda is presumed dead. The rebuilt Vision, with no memories, is on the loose.",
        "Sam Wilson is Captain America. Valentina is putting together a team of her own.",
        "Shuri is the Black Panther, and Wakanda has a dangerous neighbor in Talokan."
      ]
    },
    "5": {
      "name": "Phase 5",
      "short": "P5",
      "subtitle": "The Pieces Out of Place",
      "years": "2023–2025",
      "text": [
        "It is the most uneven phase, and it is worth knowing why. It begins in [[t:quantumania|Quantumania]] by introducing [[kang|Kang the Conqueror]] as the Thanos of the new saga, and ends without him. The studio abandoned the character in 2024. Anyone watching today can treat Kang as a defeated villain and move on.",
        "What really drives the story happens in the second season of [[t:loki2|Loki]]. The machine the TVA used to weave time can't handle the number of branches and is going to destroy them all. Loki learns to move through time at will, tries to fix the machine for centuries and understands there is no fix. He destroys it and holds the timelines with his own hands, alone, on a throne at the end of time. The multiverse only keeps existing because he is there.",
        "[[t:deadpool|Deadpool & Wolverine]] opens the other door. The TVA tells [[deadpool|Wade Wilson]] that his universe, the one from Fox's X-Men films, is going to die because its [[ancora|anchor being]], Logan, died. Wade looks for a replacement [[wolverine|Wolverine]] in another universe and the two save that world. The film establishes that Fox's X-Men exist in a neighboring universe, [[t10005|Earth-10005]], within reach of the MCU. Before it, [[t:marvels|The Marvels]] had already left [[monica|Monica Rambeau]] stuck in a universe where [[fera|Beast]] lives.",
        "On the main Earth, two teams are born. In [[t:cap4|Brave New World]], Sam Wilson faces President [[ross|Thaddeus Ross]], manipulated by [[sterns|Samuel Sterns]] until he becomes Red Hulk, and decides that the world needs the Avengers again. The film also shows what came out of [[ilhacel|Celestial Island]]: [[adamantium|adamantium]], a metal that countries fight over. In [[t:thunder|Thunderbolts*]], Yelena, Bucky, Walker, [[ava|Ava Starr]] and [[alexei|Alexei]] survive a cleanup by Valentina and find [[bob|Bob]], a man with the power of a god and a depression that takes a shape of its own. They save him, and Valentina presents them to the press as the [[novos|New Avengers]].",
        "The rest of the phase runs in parallel. The Guardians say their goodbyes. Nick Fury faces an infiltration by shapeshifting aliens. In New York, [[fisk|Wilson Fisk]] becomes mayor and hounds vigilantes, with [[matt|Daredevil]] on the other side. And [[agatha|Agatha]] reveals that one of Wanda's sons, [[billy|Billy]], has found a body to live in."
      ],
      "keep": [
        "Loki sustains the multiverse. If he leaves, no one knows what happens.",
        "The universe of Fox's X-Men is linked to the MCU.",
        "Two teams are contesting the name Avengers: Sam Wilson's and Valentina's.",
        "Sterns, in prison, warns Sam that other worlds are coming.",
        "In the final scene of Thunderbolts*, fourteen months later, a ship with the number 4 enters Earth's orbit."
      ]
    },
    "6": {
      "name": "Phase 6",
      "short": "P6",
      "subtitle": "The Convergence",
      "years": "2025–2027",
      "text": [
        "The phase begins far from everything. [[t:quarteto|First Steps]] takes place on [[t828|Earth-828]], a world with the look of a futuristic 1960s where the [[quarteto|Fantastic Four]] are the only team of heroes and are adored. [[sue|Sue Storm]] is pregnant when the [[surfista|Silver Surfer]] arrives announcing [[galactus|Galactus]], a being who devours planets. Galactus offers to spare Earth in exchange for the baby, in whom he senses a power capable of replacing his own. The family refuses and the world turns on them, until Sue convinces everyone to fight together. The plan works at the cost of her life, and the newborn [[franklin|Franklin]] brings her back.",
        "The mid-credits scene is the most important of the phase. Four years later, Sue leaves the room for a moment and, on returning, finds a man in a green hood kneeling before Franklin, holding a metal mask. It is the first appearance of [[doom|Doctor Doom]].",
        "On the main Earth, [[t:aranha4|Brand New Day]] finds [[peter|Peter Parker]] four years after being forgotten: an adult, alone, protecting New York without anyone knowing his name. Someone is attacking [[controle|Damage Control]] prisons by jumping from mind to mind. It is [[jean|Jean Grey]], a young telepath whose sister died in one of the agency's cells. Peter, who gets organic webbing and nearly loses control of his own powers, works with the [[frank|Punisher]], with [[hulk|Bruce Banner]] and with [[yelena|Yelena]], faces Jean and ends up comforting her. He ends up determined not to live alone anymore, and with a mystery: his friend [[ned|Ned]]'s tracker records a Spider-Man off Earth.",
        "In New York, the second season of [[t:demolidor|Daredevil: Born Again]] ends the rule of [[fisk|Wilson Fisk]]: he loses his wife, is exposed in court by [[matt|Matt Murdock]], who reveals he is Daredevil, and accepts exile. Matt ends up in prison.",
        "The phase's series are smaller. Wonder Man is a standalone story about an actor with powers. VisionQuest, which premieres in October 2026, follows the rebuilt [[visao|Vision]] in search of who he was, and brings [[ultron|Ultron]] back.",
        "From here on it is Doomsday. What is known about the film is at the top of this page."
      ],
      "keep": [
        "The Fantastic Four left Earth-828 and arrived on the main Earth. The reason hasn't been shown yet.",
        "Doom has known Franklin Richards since the boy was four years old.",
        "A Spider-Man is somewhere in space.",
        "Jean Grey exists in the MCU."
      ]
    }
  },
  "doomsday": {
    "intro": [
      "Avengers: Doomsday is the fifth Avengers film and the first half of the finale of the Multiverse Saga. The announced premise fits in a sentence: the multiverse is collapsing, and heroes from three universes end up in the same place, facing [[doom|Victor von Doom]]. The three universes are the main Earth, the one of the [[quarteto|Fantastic Four]] and the one of the [[xmen|X-Men]] from the Fox films.",
      "The story begins fourteen months after [[t:thunder|Thunderbolts*]], at the moment that film's last scene left hanging. Marvel Studios president Kevin Feige says the film picks up the thread of [[t:ultimato|Endgame]] and that one of its goals is to give an ending to stories that predate the MCU itself, such as that of the original X-Men. The directors are the Russo brothers, the same ones behind Infinity War and Endgame, and the two new films were written together, like that pair.",
      "What follows is the state of each piece before the screening begins. Everything that is not confirmed fact is marked as such."
    ],
    "fronts": [
      {
        "title": "Why there is a multiverse, and why it is falling",
        "text": [
          "Throughout the first saga there was a single timeline. That was not natural. One man, [[kang|He Who Remains]], had won a war between versions of himself and, so it wouldn't be repeated, kept a single sequence of events, erasing any deviation through the [[tva|TVA]]. In 2021, in the series Loki, [[sylvie|Sylvie]] kills him. The branches stop being erased, and each one becomes a universe.",
          "The machine that sustained time wasn't built for that and nearly destroys everything. In the second season, [[loki|Loki]] replaces it: he holds the timelines with his own hands, seated at the end of time, and they grow around him like a tree. That is the current situation. The multiverse depends on one person.",
          "The new danger is called an [[incursoes|incursion]]: when the border between two universes gives way, one rolls over the other and at least one is destroyed. [[strange|Stephen Strange]] learned about this in Multiverse of Madness and, in the last scene, was told he had caused one. No one else on the main Earth is dealing with the matter. The only warning came from a prisoner: at the end of Brave New World, [[sterns|Samuel Sterns]] tells Sam Wilson that there are other worlds and that their inhabitants are coming.",
          "Fourteen months after Thunderbolts*, they arrive: a ship from another dimension, with the number 4, enters the solar system."
        ]
      },
      {
        "title": "Sam Wilson's Avengers",
        "text": [
          "After Endgame, no team was left. Stark and Natasha died, Steve stayed in the past, Thor went into space, Banner and Clint stepped away. For years crises were handled by whoever was nearby.",
          "[[sam|Sam Wilson]] inherited the shield, hesitated and took it up. In Brave New World, with no serum or powers, he averts a war and stops a president turned into Red Hulk. The president himself had asked him to recreate the Avengers, and Sam decides to do it on his own. He has at his side [[joaquin|Joaquin Torres]], the new Falcon.",
          "It hasn't been shown who else he called. In the film's cast, on the main Earth side, are [[thor|Thor]], [[scott|Scott Lang]] with his daughter [[cassie|Cassie]], and [[shangchi|Shang-Chi]]."
        ]
      },
      {
        "title": "The New Avengers",
        "text": [
          "This is the other team, and it was born of a coup. [[valentina|Valentina de Fontaine]], director of the CIA, ordered her agents to kill each other to erase evidence against her. They survived, saved New York and were about to arrest her when she put them in front of the cameras and announced them as the New Avengers.",
          "They are [[yelena|Yelena Belova]], Natasha's adoptive sister and the de facto leader; [[bucky|Bucky Barnes]], the former Winter Soldier; [[walker|John Walker]], the Captain America who went wrong; [[ava|Ava Starr]], who passes through walls; [[alexei|Alexei]], a Soviet super-soldier and Yelena's stand-in father; and [[bob|Bob Reynolds]], the Sentry. Bob is the most powerful one in the entire film and doesn't use his powers, for fear of releasing the Void again, the part of him that covers everything in shadow.",
          "They live in the old Avengers Tower in New York. Sam Wilson is suing them over the use of the name. They are the ones who detect the Fantastic Four's ship."
        ]
      },
      {
        "title": "The Fantastic Four and their son",
        "text": [
          "[[reed|Reed Richards]], [[sue|Sue Storm]], [[johnny|Johnny Storm]] and [[ben|Ben Grimm]] come from [[t828|Earth-828]], a world that stopped at a 1960s look and advanced in science. There they are the only heroes. In First Steps they face [[galactus|Galactus]], who offers to spare the planet in exchange for the child Sue was expecting. They refuse, and send him away with the help of his herald.",
          "The baby, [[franklin|Franklin]], has a power the film doesn't measure. As a newborn, he brought his mother back from death. Four years later, in the credits scene, Sue finds a man in a green cape kneeling before the boy, with a metal mask in his hand.",
          "Why the family crossed to the main Earth hasn't been shown. Franklin appears in the film, as does the family's house robot, H.E.R.B.I.E. A teaser shows the four of them in Wakanda."
        ]
      },
      {
        "title": "Victor von Doom",
        "text": [
          "In the comics, [[doom|Doctor Doom]] is the great rival of Reed Richards: as intelligent as he is, scientist and sorcerer, absolute ruler of a small country, [[latveria|Latveria]], and convinced that only he can fix the world.",
          "In the movies, what the trailers tell us is this. He comes from Earth-828 and, according to Sue Storm's narration, was once a friend of the Four. Reed confronts him asking whether a destruction was his doing. Doom tells the heroes that they have lived stolen lives and that all of them will be faced with an unthinkable decision. He stops Thor's axe with two fingers and raises an army of Sentinels again, the mutant-hunting robots from the X-Men's universe. The production also confirmed Latverian witches in the cast.",
          "He is played by Robert Downey Jr., the actor who played Tony Stark. Marvel hasn't explained whether the identical face has a reason within the story. What Doom wants hasn't been said either."
        ]
      },
      {
        "title": "Wakanda and Talokan",
        "text": [
          "[[shuri|Shuri]] has been the Black Panther since her brother's death. [[mbaku|M'Baku]] put himself forward to contest the throne. [[namor|Namor]], king of the underwater people of Talokan, killed Shuri's mother, was defeated and spared by her, and accepted an alliance thinking of using it later.",
          "All three are in the film, as are two of Namor's warriors, Namora and Attuma. A teaser shows the Four welcomed in Wakanda and the Thing facing M'Baku. Another clip shows Shuri and M'Baku fighting Namor on a dry riverbed surrounded by walls of water."
        ]
      },
      {
        "title": "The X-Men",
        "text": [
          "The X-Men who appear are not from the MCU. They are the ones from the Fox films, from another universe, [[t10005|Earth-10005]], and they return with the actors from 2000: [[xavier|Charles Xavier]], [[magneto|Magneto]], [[ciclope|Cyclops]], [[mistica|Mystique]], [[noturno|Nightcrawler]] and [[fera|Beast]], plus [[gambit|Gambit]].",
          "What you need to know about them is the old divide: Xavier believes in coexistence with humans, and Magneto, a Holocaust survivor, thinks mutants will be exterminated if they don't strike first. The two have been friends and adversaries for decades.",
          "Two bridges link that universe to the MCU. In Deadpool & Wolverine, the TVA explains that it was dying, and it is saved. In The Marvels, [[monica|Monica Rambeau]] is left stuck in a universe where Beast lives. The trailers show the X-Men's mansion in ruins under a collapsing sky and, before any alliance, mutants fighting heroes from the main Earth: Gambit against Shang-Chi, Mystique against Yelena."
        ]
      },
      {
        "title": "Who returns from far away",
        "text": [
          "[[steve|Steve Rogers]] stayed in the past at the end of Endgame, to live with [[peggy|Peggy Carter]]. Both actors are in the cast. A teaser shows him arriving at a house on a motorcycle and picking up a baby. According to the cast list, he takes on the identity of Nomad, the one the character uses in the comics when he stops being Captain America. The directors say his story and Doom's are central.",
          "[[thor|Thor]] is raising his adoptive daughter, Love, who is also in the film. A teaser shows him praying to his father before a battle.",
          "[[loki|Loki]] is in the cast. The tree of universes that is falling depends on him."
        ]
      },
      {
        "title": "Who is not in the announced cast",
        "text": [
          "[[wanda|Wanda Maximoff]] is presumed dead, with no body. [[strange|Stephen Strange]] left to fix an incursion; his film is on the list Disney+ recommends, and the press expects to see him. [[peter|Peter Parker]] is still forgotten by the world, and the last scene of Brand New Day records a Spider-Man off Earth. [[hulk|Bruce Banner]], [[carol|Carol Danvers]], [[clint|Clint Barton]] and the [[guardioes|Guardians]] have not been announced either.",
          "[[deadpool|Deadpool]] and [[wolverine|Wolverine]] are not on the official list, but the two actors appeared in a Marvel video in August 2026 offering help. Surprises are tradition in these films, and none of this is confirmed."
        ]
      }
    ],
    "trailers": [
      {
        "when": "December 2025 and January 2026",
        "text": "Four short teasers, shown in theaters. One shows Steve Rogers back, with a baby. Another, Thor before the battle. The third, the X-Men. The fourth, the Fantastic Four in Wakanda, with the Thing facing M'Baku and Namor in a new suit. All end on a ticking countdown clock."
      },
      {
        "when": "July 2026, Comic-Con",
        "text": "Full trailer. Doom raises an army of Sentinels against the Avengers, the Four and the X-Men. A map with three realities in collision appears, along with the X-Men's mansion in ruins and fights between heroes from different universes."
      },
      {
        "when": "August 2026, D23",
        "text": "Preview centered on Doom. Sue Storm tells who he was; Reed confronts him; Thor attacks him and is stopped with two fingers; New York appears destroyed; Johnny hugs Franklin while a world falls apart behind them."
      },
      {
        "when": "September 2026",
        "text": "Endgame returns to theaters with a new clip that, according to the press, sets up the fate of Fox's X-Men."
      }
    ],
    "cast": [
      {
        "group": "Avengers and allies · main Earth",
        "ids": [
          "sam",
          "joaquin",
          "thor",
          "scott",
          "cassie",
          "shangchi",
          "steve",
          "peggy",
          "loki"
        ]
      },
      {
        "group": "New Avengers · main Earth",
        "ids": [
          "yelena",
          "bucky",
          "walker",
          "ava",
          "alexei",
          "bob"
        ]
      },
      {
        "group": "Wakanda and Talokan · main Earth",
        "ids": [
          "shuri",
          "mbaku",
          "namor"
        ]
      },
      {
        "group": "Fantastic Four · Earth-828",
        "ids": [
          "reed",
          "sue",
          "johnny",
          "ben",
          "franklin"
        ]
      },
      {
        "group": "X-Men · Earth-10005",
        "ids": [
          "xavier",
          "magneto",
          "ciclope",
          "mistica",
          "noturno",
          "fera",
          "gambit"
        ]
      },
      {
        "group": "The villain",
        "ids": [
          "doom"
        ]
      }
    ],
    "questions": [
      "What Doom wants, and what decision it is that he talks about.",
      "Why he has Tony Stark's face.",
      "How Steve Rogers comes back, and whose baby it is.",
      "Why the Four left Earth-828 and where Doom fits into that.",
      "Who destroyed the New York seen in the trailer, and which universe it is from.",
      "What happens to the universes if Loki lets go of the tree.",
      "Which Spider-Man was located in space.",
      "How it ends. It is the first of two parts, as Infinity War was to Endgame, and that film ended in defeat."
    ],
    "dateNote": "December 18, 2026 is the U.S. release date. Check the date for your country.",
    "facts": [
      "Directors: Anthony and Joe Russo.",
      "Villain: Robert Downey Jr. as [[doom|Doctor Doom]].",
      "Reported running time: about 2 h 45 min.",
      "When it takes place: fourteen months after Thunderbolts*.",
      "Continues in Secret Wars, on December 17, 2027.",
      "Inspiration cited by the studio: the comics leading up to Secret Wars, in which universes collide one by one."
    ],
    "universes": [
      "[[t616|Earth-616]], the main one",
      "[[t828|Earth-828]], the Four's",
      "[[t10005|Earth-10005]], the X-Men's"
    ]
  },
  "profiles": [
    {
      "id": "stark",
      "type": "p",
      "group": "Original Avengers",
      "name": "Tony Stark",
      "description": "Iron Man, the starting point of everything.",
      "profile": [
        "Heir to Stark Industries, an engineering genius and weapons maker until he is wounded and kidnapped with his own weapons. He comes out of captivity with a reactor in his chest, which keeps shrapnel from reaching his heart, and with the first suit of armor.",
        "The trait that drives Tony through the saga is fear. After seeing an alien army over New York, he comes to believe that Earth is not ready and that it falls to him to prepare it. That fear creates Ultron, leads him to back the Sokovia Accords and makes him adopt Peter Parker as a protégé.",
        "During the Blip, he marries Pepper Potts and has a daughter, Morgan. Even so, he accepts the risk of inventing time travel. He dies in 2023 using all six Stones against Thanos: the human body can't withstand the energy."
      ],
      "now": "Dead. The actor, Robert Downey Jr., returns in Doomsday as Doctor Doom, and Marvel has not explained whether there is a connection between the two characters.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Kidnapped with his own weapons, he builds the first suit in a cave. He finds out his partner was selling weapons to terrorists and, in the end, reveals to the world that he is Iron Man.",
        "hf2": "The reactor keeping him alive is poisoning his blood. He refuses to hand the armor over to the government, loses one to Rhodes and cures himself by synthesizing an element his father left behind.",
        "ving1": "Joins the team as a consultant. He argues with Steve, sees Coulson die and carries a nuclear missile through the portal, facing the enemy fleet alone. It is what traumatizes him.",
        "hf3": "Suffering panic attacks, he loses his house and his suits and investigates the Mandarin with only what he has. In the end, he destroys the suits and has surgery on his chest.",
        "ving2": "After a vision of his teammates dead, he creates Ultron to protect the planet. Ultron tries to wipe out humanity. Stark helps create Vision to fix the mistake.",
        "gcivil": "Guilty over Sokovia, he supports the Accords and tries to arrest Steve. He finds out that Bucky killed his parents and that Steve knew. The friendship ends.",
        "aranha1": "Gives Peter Parker a suit and keeps him at a distance, afraid he will get hurt. He takes the suit back and, in the end, offers him a place on the team.",
        "ginfinita": "Follows the ship carrying Strange and fights Thanos on Titan. He is wounded, and Strange trades the Time Stone for his life. He watches Peter turn to dust.",
        "ultimato": "Rescued from space, he spends five years with Pepper and their daughter. He solves time travel, meets his father in 1970 and, in the battle, takes Thanos's Stones and snaps his fingers. He dies.",
        "aranha2": "Already dead. He left Peter the glasses that control a drone system, and it is his shadow that weighs over the whole film."
      }
    },
    {
      "id": "steve",
      "type": "p",
      "group": "Original Avengers",
      "name": "Steve Rogers",
      "description": "The first Captain America.",
      "profile": [
        "A scrawny kid from Brooklyn who tries to enlist several times in World War II and is turned down. A scientist picks him for the super-soldier serum precisely because he is good before being strong. The serum gives him strength, speed and endurance at the limit of the human.",
        "He spends almost seventy years frozen in the Arctic. In the present, he is the Avengers' field leader and the one who most distrusts authority: he watched S.H.I.E.L.D. be taken over by Hydra and refuses the Sokovia Accords. His loyalty to Bucky Barnes sets him against Stark.",
        "In Endgame he proves worthy of lifting Thor's hammer. After the battle, he goes back in time to return the Stones and decides to stay, living the life he lost with Peggy Carter."
      ],
      "now": "Lives in another timeline with Peggy. A teaser shows him back, with a baby in his arms. According to the cast list, he takes on the identity of Nomad, the one the character uses in the comics when he gives up the title of Captain America.",
      "inDoomsday": true,
      "appearances": {
        "cap1": "Turned down by the Army, he is chosen for the serum for his character. He rescues Bucky, leads the fight against Hydra, loses his friend and crashes the Red Skull's plane into the ice.",
        "ving1": "Freshly thawed, he finds the world strange and distrusts S.H.I.E.L.D. In the battle, he is the one giving the orders, and the others obey.",
        "cap2": "Discovers that Hydra lives inside S.H.I.E.L.D. and that the Winter Soldier is Bucky. He brings down the agency and refuses to fight his friend.",
        "ving2": "Leads the team against Ultron and argues with Stark about creating things without asking anyone. In the end, he starts training the new Avengers.",
        "gcivil": "Refuses the Accords, protects Bucky from a false accusation and faces Stark. He drops the shield and becomes a fugitive.",
        "ginfinita": "Reappears bearded, without the shield, to save Wanda and Vision. He leads the defense of Wakanda and tries to hold back Thanos's gauntlet with his bare hands.",
        "ultimato": "Runs support groups during the Blip. In the battle, he lifts Mjolnir. He returns the Stones to the past, stays with Peggy and hands the shield to Sam.",
        "doomsday": "In the cast. The directors say he and Doctor Doom are central to the story."
      }
    },
    {
      "id": "thor",
      "type": "p",
      "group": "Original Avengers",
      "name": "Thor",
      "description": "The god of thunder, who lost almost everything.",
      "profile": [
        "Prince of Asgard, son of Odin. He lives thousands of years, controls lightning and, for a long time, depends on the hammer Mjolnir, which only the worthy can lift.",
        "He is the Avenger who loses the most. His mother dies in The Dark World. In Ragnarok his father and friends die, the hammer is destroyed, he loses an eye and has to let Asgard explode. In Infinity War he watches Thanos kill Loki and half of the people who remained. He forges a new weapon, the axe Stormbreaker, hits Thanos in the chest and not the head, and carries that guilt.",
        "He spends the Blip drinking in New Asgard. After Endgame, he leaves the throne to Valkyrie and travels with the Guardians. In Love and Thunder he meets Jane Foster again, who dies of cancer, and adopts the villain Gorr's daughter."
      ],
      "now": "He is raising his adoptive daughter, Love, who is also in the film. The trailers show him praying before the battle and attacking Doom, who stops his axe with two fingers.",
      "inDoomsday": true,
      "appearances": {
        "thor": "Arrogant, he provokes a war and is exiled without powers. He becomes worthy of the hammer by offering to die for others.",
        "ving1": "Comes to Earth for Loki and the Tesseract. He fights Stark and the Hulk before fighting beside them.",
        "thor2": "Loses his mother in an attack by the Dark Elves. He allies with Loki, saves Jane and turns down the throne, not knowing he is handing it to his brother.",
        "ving2": "Has a vision of the Infinity Stones and concludes that someone is gathering the pieces. He gives life to Vision with a lightning bolt.",
        "ragnarok": "In one week he loses his father, his hammer, an eye and his planet. He discovers the power of lightning is his own. He becomes king of a people without a land.",
        "ginfinita": "Watches Thanos kill Loki and half of the Asgardians. He forges Stormbreaker, hits Thanos in the chest instead of the head, and Thanos snaps his fingers.",
        "ultimato": "Beheads Thanos too late and spends five years drinking. He sees his mother again in 2013, recovers Mjolnir and leaves with the Guardians.",
        "thor4": "Meets Jane Foster again, now wielding the hammer and with cancer. He loses her again and adopts the villain's daughter.",
        "doomsday": "In the cast, with his daughter, Love.",
        "estranho": "In the credits scene, he asks Strange for help finding Odin, with Loki in tow."
      }
    },
    {
      "id": "hulk",
      "type": "p",
      "group": "Original Avengers",
      "name": "Bruce Banner",
      "description": "The Hulk.",
      "profile": [
        "A specialist in gamma radiation. He tests on himself what General Ross presented to him as research into radiation resistance, which was an Army attempt to recreate the super-soldier serum. He begins turning into the Hulk whenever he gets angry or his heart races. For years, Banner and the Hulk are two personalities who despise each other.",
        "After Ultron, the Hulk flies away and spends two years as a gladiator on Sakaar. In Infinity War he is beaten by Thanos and refuses to appear again. During the Blip, Banner finds a middle ground: his mind in the Hulk's body. It is in that form that he uses the Stones to bring everyone back, which disables his arm for a while.",
        "In She-Hulk, he trains his cousin Jennifer Walters and returns from Sakaar with a son, Skaar."
      ],
      "now": "A university professor in New York. He uses an inhibitor that prevents the transformation. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "Lives in hiding in Brazil, looking for a cure. He fights the Abomination in Harlem and ends up learning to trigger the transformation.",
        "ving1": "Fury calls him in for what he knows about gamma radiation. He becomes the Hulk inside the S.H.I.E.L.D. carrier and, in the battle, shows he can transform when he wants.",
        "ving2": "Creates Ultron with Stark. Wanda makes him wreck a city, and he vanishes in a jet so as not to hurt anyone else.",
        "ragnarok": "Has been transformed for two years, champion of the Sakaar arena. Thor makes him turn back into Banner.",
        "ginfinita": "The Hulk is beaten by Thanos in the first scene and, for the rest of the film, refuses to appear. Banner fights in an armor.",
        "ultimato": "During the Blip, he merges Banner's mind with the Hulk's body. He is the one who gets the Time Stone from the Ancient One and the one who snaps his fingers to bring everyone back.",
        "shangchi": "Examines the ten rings with Wong and Carol.",
        "mulherhulk": "With his arm healed and back in human form, he trains his cousin Jennifer. He goes to Sakaar and returns with a son, Skaar.",
        "aranha4": "Helps Peter build a power inhibitor. Jean Grey possesses him, rips off his inhibitor and unleashes the Hulk; Peter calms him.",
        "hf3": "In the post-credits scene, he dozes off while Stark tells him the whole story.",
        "cmarvel": "In the credits scene, in 2018, he is among the Avengers counting the vanished."
      }
    },
    {
      "id": "natasha",
      "type": "p",
      "group": "Original Avengers",
      "name": "Natasha Romanoff",
      "description": "The original Black Widow.",
      "profile": [
        "Taken from her family as a child and trained in the Red Room, a Soviet program that trained assassins. She defects to S.H.I.E.L.D. after Clint Barton, sent to kill her, decides to spare her. She has no powers.",
        "She is the one who keeps the team together. In Civil War she signs the Accords but lets Steve escape. During the Blip, she is the one who coordinates what is left of the Avengers. She often speaks of the debt she feels for the deaths she caused.",
        "In Endgame, on Vormir, the Soul Stone demands a life. She and Clint fight over who will sacrifice themselves, and she wins."
      ],
      "now": "Dead in 2023. Her adoptive sister, Yelena Belova, takes her place in the story.",
      "inDoomsday": false,
      "appearances": {
        "hf2": "Undercover as Stark's assistant to evaluate him for the Avengers. She is the first S.H.I.E.L.D. agent the audience sees in action.",
        "ving1": "Recruits Banner, pulls Loki's plan out of him in an interrogation and closes the portal with the scepter.",
        "cap2": "Goes on the run with Steve, uncovers Hydra and dumps all of S.H.I.E.L.D.'s secrets onto the internet, her own included.",
        "ving2": "Grows close to Banner and is the one who calms the Hulk. She reveals what the Red Room did to her.",
        "gcivil": "Signs the Accords and fights on Stark's side, but at the airport lets Steve and Bucky escape.",
        "ginfinita": "A fugitive with Steve and Sam, she saves Wanda and Vision and fights in Wakanda.",
        "ultimato": "Coordinates what remained of the Avengers during the Blip. On Vormir, she wins the contest with Clint and throws herself off the cliff so he can take the Soul Stone.",
        "viuva": "Set right after Civil War. She meets Yelena and her fake parents again and destroys the Red Room, which she thought was gone.",
        "cmarvel": "In the credits scene, in 2018, she is the one who asks about Fury's pager when Carol appears."
      }
    },
    {
      "id": "clint",
      "type": "p",
      "group": "Original Avengers",
      "name": "Clint Barton",
      "description": "Hawkeye.",
      "profile": [
        "A S.H.I.E.L.D. agent and archer, without powers. He is the only original Avenger with an ordinary life: a wife and three kids on a farm almost nobody knows about.",
        "His whole family vanishes in the snap. During the five years of the Blip he becomes Ronin, a vigilante who kills criminals around the world. Natasha brings him back, and on Vormir he survives because she sacrifices herself in his place.",
        "In Hawkeye, his past as Ronin comes back to collect, and he finds a successor in Kate Bishop. He wears a hearing aid, a result of years of explosions."
      ],
      "now": "Retired with his family. He passed the mantle to Kate Bishop. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "thor": "A one-minute appearance: bow drawn, he watches Thor at the base set up around the hammer.",
        "ving1": "His mind is taken over by Loki in the first scene and he spends half the film attacking his colleagues. Natasha takes him down and brings him back.",
        "ving2": "Reveals the farm, his wife and his kids to his teammates. He convinces Wanda to fight and sees Pietro die in his place.",
        "gcivil": "Retired, he comes back to get Wanda out of the compound and fights on Steve's side. He is locked up in the Raft and later accepts house arrest.",
        "ultimato": "Loses his whole family in the snap and spends five years killing criminals as Ronin. On Vormir, he fights Natasha to be the one sacrificed and loses.",
        "gaviao": "Tries to get home for Christmas and is stuck with the consequences of his years as Ronin. He trains Kate Bishop, faces Yelena and burns the suit.",
        "viuva": "Doesn't appear. He is mentioned as Natasha's partner in the Budapest attack."
      }
    },
    {
      "id": "rhodes",
      "type": "p",
      "group": "Avengers and allies",
      "name": "James Rhodes",
      "description": "War Machine.",
      "profile": [
        "An Air Force colonel and Tony Stark's best friend. He wears a heavy, armed Stark armor. He is the Avengers' link to the military.",
        "In Civil War he is hit by mistake and left paraplegic; he walks again with a brace created by Stark. Secret Invasion reveals that, at some point, he was kidnapped and replaced by a Skrull. The series doesn't say since when, which leaves in doubt which recent scenes were his."
      ],
      "now": "Rescued and recovering. His solo film, Armor Wars, has no date.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Liaison officer between the Armed Forces and Stark's company.",
        "hf2": "Takes an armor to the Air Force and becomes War Machine.",
        "gcivil": "Supports the Accords. He is hit by a blast from Vision and left paraplegic.",
        "ultimato": "Goes to 2014 with Nebula to get the Power Stone.",
        "invasao": "The Rhodes advising the president is a Skrull. The real one is found alive, still in a hospital gown.",
        "hf3": "With his armor repainted and rebranded Iron Patriot, he falls into a trap and later helps Stark save the president.",
        "ving2": "Helps in the Sokovia battle and joins the new Avengers lineup.",
        "ginfinita": "Disobeys Ross, takes in the fugitives at the base and fights in Wakanda.",
        "cmarvel": "In the credits scene, in 2018, he follows the count of the vanished.",
        "falcao": "Talks with Sam about the shield, on the day he donates it to the museum."
      }
    },
    {
      "id": "sam",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Sam Wilson",
      "description": "From Falcon to Captain America.",
      "profile": [
        "A former Air Force paratrooper who works with veterans in Washington. He meets Steve Rogers on a morning run and, when S.H.I.E.L.D. falls, returns to action with a pair of mechanical wings. He has no serum or powers of any kind.",
        "He vanishes in the snap. On returning, he receives the shield from an elderly Steve and thinks he shouldn't use it: a Black man carrying the flag is something the country still hasn't settled, as he learns on meeting Isaiah Bradley, a Black super-soldier used and imprisoned by the government in the 1950s. After seeing what John Walker does with the title, he decides to take it up.",
        "In Brave New World he uses a vibranium suit made in Wakanda and stops the Red Hulk with talk as much as with strength."
      ],
      "now": "Captain America and leader of the Avengers he reassembled. He is suing the New Avengers over the use of the name.",
      "inDoomsday": true,
      "appearances": {
        "cap2": "A veteran who meets Steve while running. He shelters the fugitives and takes to the air again with the mechanical wings to bring down Hydra.",
        "gcivil": "On Steve's side from the start. He is locked up in the Raft after the airport fight and freed by him.",
        "ginfinita": "Fights in Wakanda and turns to dust in the snap.",
        "ultimato": "He is the voice on the radio announcing the arrival of those who came back. In the end, he receives the shield from an elderly Steve.",
        "falcao": "Returns the shield because he thinks it isn't his, watches John Walker dishonor it, meets Isaiah Bradley and decides to be Captain America his own way.",
        "cap4": "Without a serum, he averts a war with Japan and stops the Red Hulk. He agrees to reassemble the Avengers.",
        "thunder": "Doesn't appear. In the final scene, it is revealed that he has his own team and is suing Valentina's group over the name.",
        "doomsday": "In the cast, at the head of the main Earth's Avengers.",
        "ving2": "Appears at the party and, in the end, joins the new Avengers lineup.",
        "hformiga": "On guard at the Avengers base, he fights Scott Lang and loses. Later he recommends him to Steve."
      }
    },
    {
      "id": "bucky",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Bucky Barnes",
      "description": "The Winter Soldier.",
      "profile": [
        "James Buchanan Barnes, Steve's best friend since childhood. He falls from a train on a mission in 1945 and is presumed dead. Hydra finds him, gives him a metal arm and a version of the serum and keeps him frozen between missions, his memory wiped. For decades he is the assassin behind deaths that changed history, including that of Tony Stark's parents.",
        "Steve recognizes him in 2014 and spends two films trying to bring him back. Bucky is cured of the programming in Wakanda, where he gets a vibranium arm and the nickname White Wolf. He vanishes in the snap.",
        "Afterward, he undergoes mandatory therapy and tries to make amends for what he did. He is elected to Congress and, in Thunderbolts*, leaves Congress to help Yelena's group."
      ],
      "now": "A member of the New Avengers.",
      "inDoomsday": true,
      "appearances": {
        "cap1": "A sergeant, Steve's childhood friend. He is captured by Hydra, rescued, and falls from a train in the Alps.",
        "cap2": "He survived. Hydra gave him a metal arm and has used him as an assassin for seventy years. He recognizes Steve in the end and pulls him out of the river.",
        "gcivil": "Framed for the Vienna bombing. Zemo reactivates his programming. It emerges that he killed Stark's parents in 1991. He asks to be frozen in Wakanda.",
        "pantera": "In the credits scene, he wakes in a Wakandan village, free of the programming, and gets the nickname White Wolf.",
        "ginfinita": "Receives a new arm, fights in Wakanda and is the first to turn to dust in front of Steve.",
        "falcao": "Tries to make amends for the Winter Soldier's crimes with a list of names. He gets Zemo out of prison and helps Sam against the Flag Smashers.",
        "cap4": "A quick appearance to console Sam. He is a candidate for Congress.",
        "thunder": "A congressman. He investigates Valentina, arrests Yelena's group to testify and ends up joining it.",
        "doomsday": "In the cast.",
        "ultimato": "Returns for the final battle. In the end, he knows in advance that Steve won't come back and says goodbye."
      }
    },
    {
      "id": "wanda",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Wanda Maximoff",
      "description": "The Scarlet Witch.",
      "profile": [
        "A Sokovian who lost her parents in a bombing with a Stark Industries missile. She and her twin brother, Pietro, volunteer for Hydra's experiments with Loki's scepter. The Mind Stone awakens a power that already existed in her: moving objects, entering minds and, later, altering reality itself.",
        "She starts as an enemy of the Avengers, switches sides and loses her brother in the same battle. She falls in love with Vision. In Infinity War she is forced to kill him to destroy the Stone, and Thanos undoes the gesture and kills him again in front of her.",
        "Grief leads her to create Westview. There she discovers she is the Scarlet Witch, a figure of prophecy capable of chaos magic, and she keeps the Darkhold. The book convinces her she can have her children back by taking them from another Wanda in another universe. In Multiverse of Madness she kills whoever turns up in her way, until she sees the fear on the boys' faces. She destroys the Darkhold in every universe and lets the mountain fall on herself."
      ],
      "now": "Presumed dead, no body shown. Her son Billy is alive. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Hates Stark for the weapons that killed her parents. She helps Ultron, discovers what he wants, switches sides and loses her brother in the battle.",
        "gcivil": "In Lagos, she deflects an explosion into a building and kills civilians. She is confined to the compound, flees with Clint and is locked up in the Raft.",
        "ginfinita": "Lives in hiding with Vision in Scotland. In Wakanda, she destroys the Mind Stone and kills him; Thanos turns back time and kills him again. She turns to dust.",
        "ultimato": "Returns and faces Thanos alone, to the point that he orders his own army bombarded to get rid of her.",
        "wandavision": "Covers a town in a fantasy in which Vision is alive and the two have children. She discovers she is the Scarlet Witch, undoes everything and keeps the Darkhold.",
        "estranho2": "Corrupted by the book, she hunts America Chavez across several universes and kills the Illuminati. She sees her children's fear, destroys the Darkhold and vanishes under the rubble.",
        "agatha": "Doesn't appear. She is presumed dead, and the search by her son Billy drives the series."
      }
    },
    {
      "id": "visao",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Vision",
      "description": "The android born of a Stone.",
      "profile": [
        "Created in the middle of the Ultron crisis. His body, of vibranium and synthetic tissue, was made by Ultron for himself. The Avengers steal it, and Stark loads into it what was left of J.A.R.V.I.S., his artificial intelligence. The Mind Stone, on his forehead, gives him consciousness. Thor completes the process with a lightning bolt.",
        "He passes through matter, flies and fires energy through the Stone. He is gentle and curious, and the first being besides Thor to lift the hammer. He dies in Infinity War when the Stone is ripped out.",
        "There are now two. The Vision of WandaVision was created by Wanda's magic and dissolved with Westview. The other is the original body, rebuilt by a government agency, all white, with no memories. Wanda's Vision passed the memories on to him before vanishing, and the white one flew away."
      ],
      "now": "The white Vision is on the loose. The series VisionQuest, from October 2026, is about him. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Born from the body Ultron made for himself, J.A.R.V.I.S.'s mind and the Mind Stone. He lifts Thor's hammer and destroys the last Ultron.",
        "gcivil": "Backs the Accords on a calculation: the team's strength invites challenges. He keeps watch over Wanda and, at the airport, hits Rhodes by mistake.",
        "ginfinita": "Wounded, he asks Wanda to destroy the Stone. He dies twice: by her hand, and by Thanos's.",
        "wandavision": "There are two. One is created by Wanda's magic and vanishes with the town. The other is the original body, rebuilt in white, which receives the memories and leaves.",
        "visionquest": "The protagonist. The white Vision tries to recover who he was."
      }
    },
    {
      "id": "scott",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Scott Lang",
      "description": "Ant-Man.",
      "profile": [
        "An electrical engineer jailed for breaking into and exposing the company he worked for. On his release, Hank Pym picks him to wear a suit that shrinks and grows. He does everything for his daughter, Cassie.",
        "He takes Steve's side in Civil War and pays with house arrest. At the moment of the snap he is inside the Quantum Realm, with no one outside to pull him out. He gets out five years later, five hours for him, because a rat bumps the panel. It is his idea that makes Endgame possible.",
        "In Quantumania he is already a celebrity and the author of a memoir. He faces Kang and comes out not knowing whether he truly beat him."
      ],
      "now": "Lives in San Francisco with Hope and Cassie.",
      "inDoomsday": true,
      "appearances": {
        "hformiga": "An ex-convict chosen by Hank Pym to wear the suit. He shrinks to the Quantum Realm and returns.",
        "gcivil": "Called by Sam, he fights on Steve's side at the airport and becomes a giant for the first time. He is arrested.",
        "hformiga2": "Under house arrest, he helps rescue Janet. He is inside the Quantum Realm when the Pyms turn to dust.",
        "ultimato": "Emerges from the Quantum Realm five years later, finds his daughter grown and brings the Avengers the idea of time travel.",
        "quantumania": "Famous and complacent, he is sucked with his family into the Quantum Realm and faces Kang to save his daughter.",
        "doomsday": "In the cast, with his daughter, Cassie."
      }
    },
    {
      "id": "hope",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Hope van Dyne",
      "description": "The Wasp.",
      "profile": [
        "Daughter of Hank Pym and Janet van Dyne. She grew up resenting her father, who hid how her mother disappeared. She is better prepared than Scott and takes a while to get a suit of her own, with wings and blasts.",
        "She vanishes in the snap with her parents. After the Blip, she runs the family company, using Pym particles for humanitarian purposes."
      ],
      "now": "Lives with Scott. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Works alongside Darren Cross as her father's spy. She trains Scott and resents not being the one to wear the suit.",
        "hformiga2": "Debuts as the Wasp, with wings and blasts. She helps bring her mother back and turns to dust in the snap.",
        "quantumania": "Runs the family company. In the Quantum Realm, she finds out what her mother was hiding and helps Scott defeat Kang.",
        "ultimato": "Returns for the final battle."
      }
    },
    {
      "id": "hank",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Hank Pym",
      "description": "The inventor of Pym particles.",
      "profile": [
        "A scientist who discovered a particle capable of changing the distance between atoms, which lets him shrink and grow. He was the first Ant-Man, in the service of S.H.I.E.L.D. during the Cold War, and left the agency in 1989 on discovering that it was trying to copy the formula.",
        "His, too, is the technology that makes it possible to enter the Quantum Realm. Without Pym particles, there would be no time travel in Endgame."
      ],
      "now": "Alive, with his family.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Pushed out of his own company, he sets up a heist to test Scott and trains him to destroy Cross's project.",
        "hformiga2": "A fugitive, he builds the quantum tunnel, enters it and brings Janet back after thirty years.",
        "ultimato": "In 1970, it is his lab that Steve takes the particles from for the trip back. In the present, he comes back from the snap.",
        "quantumania": "Helps his granddaughter build the device that causes everything. His ants, evolved over millennia, decide the battle."
      }
    },
    {
      "id": "janet",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Janet van Dyne",
      "description": "The first Wasp.",
      "profile": [
        "Hank Pym's wife and partner on missions. In 1987 she shrinks past the limit to disarm a missile and is trapped in the Quantum Realm for thirty years.",
        "There she met Kang, in exile, and helped him fix his ship until she found out who he was. She destroyed the ship's power source to keep him trapped and never told her family."
      ],
      "now": "Alive, with her family.",
      "inDoomsday": false,
      "appearances": {
        "hformiga2": "Sends a message through Scott's mind and is found by Hank. She shares part of her energy with Ava Starr.",
        "quantumania": "Tries to keep her daughter and granddaughter from tampering with the Quantum Realm. There, she confesses that she helped Kang and then sabotaged him."
      }
    },
    {
      "id": "strange",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Stephen Strange",
      "description": "Doctor Strange.",
      "profile": [
        "A brilliant and vain neurosurgeon. A car accident destroys the nerves in his hands. After spending everything on treatments, he goes to Kamar-Taj, in Nepal, and finds an order of sorcerers. He learns fast and comes to guard the New York Sanctum and the Time Stone.",
        "In Infinity War he uses the Stone to see 14 million outcomes and finds only one in which Thanos loses. For it to happen, he hands over the Stone and vanishes in the snap. Having been gone five years, he loses the post of Sorcerer Supreme to Wong.",
        "In the Multiverse Saga he is the one who meddles most with what he shouldn't. The botched spell for Peter Parker cracks the borders between universes. In Multiverse of Madness he uses the Darkhold and takes over the corpse of another version of himself to stop Wanda, which gives him a third eye. In the last scene, a sorceress named Clea warns that he caused an incursion and takes him to fix it."
      ],
      "now": "In another dimension with Clea. Not in the announced Doomsday cast, but his film is on the official list.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "A surgeon who loses his hands, learns magic at Kamar-Taj and defeats Dormammu by trapping him in a time loop.",
        "ragnarok": "A short appearance: he locates Odin for Thor and sends the two brothers away from New York.",
        "ginfinita": "Taken into space, he sees 14 million futures. He hands the Time Stone to Thanos to save Stark and turns to dust saying there was no other way.",
        "ultimato": "Brings the armies through the portals. At the decisive moment, he raises one finger to Stark: it is the only chance.",
        "aranha3": "Casts the spell that goes wrong and, in the end, the one that erases Peter Parker from the world's memory.",
        "estranho2": "Protects America Chavez from Wanda, learns about incursions on Earth-838, uses the Darkhold and gains a third eye. He leaves with Clea."
      }
    },
    {
      "id": "wong",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Wong",
      "description": "The Sorcerer Supreme.",
      "profile": [
        "Librarian of Kamar-Taj and Strange's companion. Serious at work and good-humored outside it.",
        "Becomes Sorcerer Supreme during the Blip, in Strange's absence. In Phase 4 he is the character who gets around the most: he introduces Shang-Chi to the Avengers, trains America Chavez, appears in She-Hulk."
      ],
      "now": "Sorcerer Supreme, at Kamar-Taj.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Takes over the Kamar-Taj library after the theft. He dies in Hong Kong, and Strange brings him back by reversing time.",
        "ginfinita": "Explains to Stark what the Infinity Stones are and stays behind to guard the Sanctum.",
        "shangchi": "Fetches Shang-Chi and Katy in San Francisco and takes them to Kamar-Taj to examine the rings.",
        "aranha3": "Already Sorcerer Supreme, he advises against Peter's spell and leaves the scene.",
        "estranho2": "Defends Kamar-Taj from Wanda, is forced to take her to Wundagore and helps Strange face her.",
        "mulherhulk": "A client and witness of Jennifer Walters. In the end, he gets the Abomination out of prison.",
        "ultimato": "Opens the portals through which the armies arrive in the final battle."
      }
    },
    {
      "id": "peter",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Peter Parker",
      "description": "Spider-Man.",
      "profile": [
        "A teenager from Queens, raised by his Aunt May, with strength, agility and a sense that warns him of danger. He builds his own web shooters. Stark recruits him in Civil War and becomes a father figure. His films are co-productions with Sony, which owns the character's film rights.",
        "He vanishes in the snap and returns to watch Stark die. In Far From Home, the villain Mysterio releases a video that incriminates him and reveals his name. His life and his friends' lives become hell.",
        "In No Way Home, the spell meant to fix this pulls in visitors from other universes, among them two older Spider-Men. Aunt May is killed. To save reality, Peter asks Strange to make the entire world forget him. MJ and Ned no longer recognize him, and he chooses not to tell them.",
        "Brand New Day finds him four years later, alone by choice. His body changes: his senses sharpen and he starts producing webbing, which at first makes him dangerous. The film is about accepting help. He works with Frank Castle, Bruce Banner and Yelena Belova, faces and then comforts Jean Grey, and ends by introducing himself to Ned again."
      ],
      "now": "An adult, still forgotten by everyone, with organic webbing and stronger powers. He has grown close to Ned and MJ again, who still don't remember him. The post-credits scene of Brand New Day records a Spider-Man off Earth. Tom Holland is not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "He is 15 and operates in Queens in a homemade suit. Stark recruits him for the airport fight and gives him a new suit.",
        "aranha1": "Back at school, he wants real missions. He faces the Vulture, the father of the girl he likes, and in the end turns down the spot on the Avengers.",
        "ginfinita": "Sneaks aboard the ship carrying Strange, fights on Titan and is one of those who turn to dust, in Stark's arms.",
        "ultimato": "Returns with everyone, joins the final battle and is at Stark's side when he dies.",
        "aranha2": "In mourning, he hands Stark's technology to Mysterio, thinking he isn't up to it. He fixes the mistake and ends up with his name exposed to the world.",
        "aranha3": "Tries to erase from the world's memory that he is Spider-Man and ends up drawing in villains from other universes. He loses Aunt May and chooses to be forgotten by everyone.",
        "aranha4": "Four years later, alone. He gets organic webbing, faces Jean Grey and the possessed Hulk, takes a bullet for Jean and decides to have friends again."
      }
    },
    {
      "id": "mj",
      "type": "p",
      "group": "Avengers and allies",
      "name": "MJ",
      "description": "Michelle Jones-Watson.",
      "profile": [
        "Peter's schoolmate, observant and dry-witted. She figures out on her own that he is Spider-Man, and the two date.",
        "After the spell in No Way Home, she doesn't remember having met him."
      ],
      "now": "Came back from MIT to New York. She read Peter's letter and knows what he says they lived through together, but hasn't recovered her memory.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "A quiet decathlon teammate who watches Peter more than he realizes.",
        "aranha2": "Figures out Peter's identity.",
        "aranha3": "Helps capture and cure the villains, falls from the Statue of Liberty and is saved by another Peter. She forgets her boyfriend in the final spell.",
        "aranha4": "Returns to the city with a boyfriend. She is attacked by Jean Grey, saved by Peter, helps finish the inhibitors and finds the letter he never sent."
      }
    },
    {
      "id": "ned",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Ned Leeds",
      "description": "Peter's best friend.",
      "profile": [
        "The first to find out Peter's identity and his improvised tech support. In No Way Home he turns out to be able to open portals with Strange's ring.",
        "He also forgot Peter. In Brand New Day, the app that tracks Spider-Man sightings is his."
      ],
      "now": "Friends with Peter again, without remembering the past. The tracker he created detected a Spider-Man off Earth.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Finds out Peter's identity.",
        "aranha3": "Opens portals; forgets Peter.",
        "aranha4": "Lives with MJ. He meets the masked Spider-Man and, in the end, Peter introduces himself to him with the old handshake. His app is the post-credits scene.",
        "aranha2": "Spends the trip to Europe dating a classmate and covering for Peter's absences.",
        "ginfinita": "On the school bus, he distracts the other kids so Peter can slip out the window."
      }
    },
    {
      "id": "tchalla",
      "type": "p",
      "group": "Avengers and allies",
      "name": "T'Challa",
      "description": "The Black Panther.",
      "profile": [
        "Prince and later king of Wakanda. The Black Panther is the title of the country's protector: whoever receives it takes an herb that gives strength and heightened senses and wears a vibranium suit.",
        "He debuts in Civil War, avenging his father. In his own film, he faces his cousin Killmonger, loses the throne, recovers it and concludes that his cousin was right on one point: Wakanda couldn't stay hidden while the world suffered. He opens the country. He vanishes in the snap and returns for the final battle.",
        "The actor Chadwick Boseman died in 2020. Marvel decided not to replace him, and T'Challa dies of an illness offscreen, at the start of Wakanda Forever. He left a son with Nakia, raised in secret in Haiti, who is also named T'Challa."
      ],
      "now": "Dead. His sister, Shuri, is the Black Panther.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Watches his father die in the Vienna bombing and hunts Bucky. On finding the real culprit, he gives up on vengeance and shelters Bucky in Wakanda.",
        "pantera": "Crowned, he is challenged and defeated by his cousin Killmonger. He returns, wins and decides to open Wakanda to the world.",
        "ginfinita": "Receives Vision and the Avengers and leads the army in the battle. He turns to dust in front of Okoye.",
        "ultimato": "He is the first to step out of the portals in the final battle.",
        "wakanda": "Dies of an illness before the first scene. The film is the mourning for him."
      }
    },
    {
      "id": "carol",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Carol Danvers",
      "description": "Captain Marvel.",
      "profile": [
        "An Air Force test pilot. In 1989, an experimental engine powered by the Tesseract's energy explodes and she absorbs the discharge. The Kree empire takes her, wipes her memory and uses her as a soldier until she remembers who she is, in 1995.",
        "She flies, survives in space and fires energy. She is one of the most powerful people in the MCU and spends most of her time far from Earth, which explains her absence from almost everything. It was she who inspired in Fury the name Avengers.",
        "In The Marvels, she corrects an old mistake: by destroying the intelligence that ruled the Kree, she left their planet in civil war."
      ],
      "now": "Back on Earth, in the house that used to belong to the Rambeaus. The Marvels was left off the official list, and she is not in the announced cast.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "A Kree soldier with no memory, she discovers on 1995 Earth that she was the pilot Carol Danvers. She unleashes her powers and leaves to help the Skrulls.",
        "ultimato": "Rescues Stark from space, helps find Thanos and, in the final battle, tears through his ship.",
        "shangchi": "In the credits scene, she examines the ten rings by hologram.",
        "msmarvel": "Appears at the last second, in Kamala's bedroom, after swapping places with her.",
        "marvels": "Faces the consequences of leaving the Kree planet in ruins. She relights its sun and loses Monica to another universe."
      }
    },
    {
      "id": "fury",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Nick Fury",
      "description": "The man who brought the Avengers together.",
      "profile": [
        "Director of S.H.I.E.L.D. After meeting Carol Danvers in 1995, he concludes that Earth needs extraordinary people on its side and spends years putting together the Avengers Initiative. He lost his left eye to a scratch from Goose, an alien creature that looks like a cat.",
        "He fakes his own death when the agency falls and begins acting from the shadows. He vanishes in the snap. After the Blip he goes to work in space, and the one who appears in his place in Far From Home is the Skrull Talos.",
        "Secret Invasion shows a tired Fury, held to account for a promise he didn't keep: finding a home for the Skrull refugees."
      ],
      "now": "Runs the S.A.B.E.R. space station.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Appears in the post-credits scene, at Stark's house, to talk about the Avengers Initiative.",
        "ving1": "Assembles the team against his superiors' wishes and uses Coulson's death to unite it.",
        "cap2": "Survives an attack, fakes his death and helps Steve bring down the S.H.I.E.L.D. he himself ran.",
        "cmarvel": "In 1995, a field agent with both eyes. He meets Carol and the Skrulls and has the idea for the Avengers.",
        "aranha2": "The Fury in the film is the Skrull Talos. The real one is on a space station.",
        "invasao": "Returns to Earth to stop the rebel Skrulls and is held to account for the promise he didn't keep.",
        "marvels": "Runs the S.A.B.E.R. station and backs Carol, Monica and Kamala.",
        "hf2": "Reveals to Stark who Natasha is, hands over his father's materials and accepts him only as a consultant.",
        "thor": "In the credits scene, he shows the Tesseract to Selvig.",
        "cap1": "Receives Steve in Times Square and tells him how much time has passed.",
        "ving2": "Shows up at Barton's farm to give the team direction and arrives in Sokovia with a ship for the evacuation.",
        "ginfinita": "In the credits scene, he activates Carol Danvers's pager seconds before turning to dust.",
        "ultimato": "Returns from the snap and appears at Stark's funeral."
      }
    },
    {
      "id": "hill",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Maria Hill",
      "description": "Fury's right hand.",
      "profile": [
        "Deputy director of S.H.I.E.L.D. and, after the agency's fall, a Stark employee. She is present at almost every moment when the Avengers need coordination.",
        "She is killed in the first episode of Secret Invasion by a Skrull with Fury's face."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "ving1": "Coordinates the S.H.I.E.L.D. carrier during Loki's attack.",
        "invasao": "Killed in the first episode by Gravik, who was wearing Fury's face.",
        "cap2": "Rescues Steve, Natasha and Sam and takes them to the living Fury.",
        "ving2": "Works for Stark and helps Fury evacuate Sokovia.",
        "ginfinita": "In the credits scene, she turns to dust beside Fury.",
        "ultimato": "Returns from the snap and appears at Stark's funeral.",
        "aranha2": "The Hill on the trip is a Skrull in disguise."
      }
    },
    {
      "id": "coulson",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Phil Coulson",
      "description": "The agent who united the team.",
      "profile": [
        "A S.H.I.E.L.D. agent who accompanies Stark, Thor and the others in the first films. A fan of Steve Rogers.",
        "Loki kills him in The Avengers, and Fury uses the death to make the team react. He appears young in Captain Marvel, set in 1995."
      ],
      "now": "Dead in the films.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Tries to schedule a meeting with Stark the whole film and helps Pepper take on Stane.",
        "ving1": "Faces Loki alone and is mortally wounded. Fury uses his death to unite the team.",
        "cmarvel": "In 1995, a rookie agent, he lets Fury and Carol get away.",
        "hf2": "Keeps watch on Stark and, in the end, finds Thor's hammer in New Mexico.",
        "thor": "Seals off the hammer and confiscates Jane Foster's research."
      }
    },
    {
      "id": "peggy",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Peggy Carter",
      "description": "Agent, S.H.I.E.L.D. founder and Steve's love.",
      "profile": [
        "A British officer who works on the super-soldier program and believes in Steve before the serum. After the war, she founds S.H.I.E.L.D. with Howard Stark.",
        "On the main timeline, she dies as an old woman in 2016, and Steve carries the coffin. In Endgame, Steve goes back to the past and lives with her in another timeline. There is also Captain Carter, a variant who took the serum in Steve's place, seen in What If...? and in Multiverse of Madness."
      ],
      "now": "The actress, Hayley Atwell, is in the Doomsday cast. It isn't known which version she plays.",
      "inDoomsday": true,
      "appearances": {
        "cap1": "A British agent in the super-soldier program. She believes in Steve before the serum and sets a dance with him that never happens.",
        "cap2": "Elderly and with memory lapses, she receives a visit from Steve.",
        "gcivil": "Dies. Steve carries the coffin, and a line of hers, read at the funeral, decides him against the Accords.",
        "ultimato": "Steve sees her through a window in 1970 and, in the end, goes back to live with her.",
        "whatif": "A variant receives the serum in Steve's place and becomes Captain Carter.",
        "estranho2": "Earth-838's Captain Carter is part of the Illuminati and is killed by Wanda.",
        "doomsday": "In the cast.",
        "hformiga": "In 1989, she is at the meeting where Hank Pym leaves S.H.I.E.L.D."
      }
    },
    {
      "id": "pepper",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Pepper Potts",
      "description": "Tony Stark's partner, wife and widow.",
      "profile": [
        "Stark's assistant, later company CEO and wife. She wears the Rescue armor in the final battle of Endgame. She has a daughter with Tony, Morgan."
      ],
      "now": "Raising Morgan. Hasn't appeared since 2019.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Stark's assistant. She finds out about Stane's betrayal and overloads the reactor at Tony's request.",
        "hf2": "Receives the presidency of the company and, in the end, starts dating Tony.",
        "ultimato": "Married to Tony, mother of Morgan. She fights in armor and tells him, in the end, that he can rest.",
        "hf3": "Kidnapped by Killian, she receives the Extremis virus and is the one who kills him.",
        "ving1": "Lives with Tony in the newly opened tower. The call he makes on entering the portal is to her.",
        "aranha1": "In the last scene, she organizes the press conference where Peter was to be presented as an Avenger.",
        "ginfinita": "Asks Tony by phone not to go, when he is already on his way to space."
      }
    },
    {
      "id": "happy",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Happy Hogan",
      "description": "The driver who became family.",
      "profile": [
        "Stark's head of security and, after his death, the bridge between Peter Parker and his legacy. He dates Aunt May for a while. After the spell, he doesn't remember Peter."
      ],
      "now": "Works at Stark Industries.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Put in charge by Stark of keeping an eye on Peter, he ignores his messages until the end.",
        "aranha2": "Picks Peter up in the Netherlands, gives him access to the lab on the plane and helps his friends in London.",
        "aranha3": "Lends his apartment for Peter to try to cure the villains. After the spell, he doesn't recognize him.",
        "hf1": "Stark's driver and bodyguard.",
        "hf2": "Helps Natasha break into Hammer's factory.",
        "hf3": "The company's head of security. He falls into a coma after an explosion, which leads Stark to challenge the Mandarin.",
        "ultimato": "At the funeral, he looks after Morgan, Tony's daughter.",
        "deadpool": "Interviews Wade Wilson for the Avengers and turns him down."
      }
    },
    {
      "id": "yelena",
      "type": "p",
      "group": "New heroes",
      "name": "Yelena Belova",
      "description": "Natasha's sister, the heart of the New Avengers.",
      "profile": [
        "She spent her childhood in Ohio in a fake family: two Russian spies posing as parents, with Natasha as her older sister. To her, at six years old, it was real. Later she was taken to the Red Room and lived under chemical control until she was freed by an antidote.",
        "She vanishes in the snap. When she returns, Natasha is already dead. Valentina de Fontaine hires her as an assassin and points to Clint Barton as the culprit; Yelena nearly kills him before learning the truth.",
        "In Thunderbolts* she is worn out and without purpose. She is the one who reaches Bob when he gets lost in the Void, recognizing in the young man the same emptiness."
      ],
      "now": "De facto leader of the New Avengers.",
      "inDoomsday": true,
      "appearances": {
        "viuva": "Freed from the Red Room's chemical control, she looks for Natasha. The two meet their fake parents again and bring down the program.",
        "gaviao": "Back from the Blip, she learned her sister died. Hired to kill Clint, she nearly does, until she hears from him what happened on Vormir.",
        "thunder": "Worn out from working for Valentina, she survives the trap, leads the group and enters the Void to get Bob out of there.",
        "doomsday": "In the cast, with the New Avengers. A trailer shows her fighting Mystique.",
        "aranha4": "A short appearance: she gives Peter the lead on the prison attacks and finds in the files who Sara Grey was."
      }
    },
    {
      "id": "kate",
      "type": "p",
      "group": "New heroes",
      "name": "Kate Bishop",
      "description": "The new Hawkeye.",
      "profile": [
        "The daughter of a wealthy New York family. As a child, she watched Clint Barton fight in the Battle of New York from a window, on the day her father died, and decided to learn archery. At 22, she gets mixed up with the mob by putting on the old Ronin suit. In the end, she finds out her own mother worked for the Kingpin."
      ],
      "now": "Clint's partner. Kamala Khan invited her to form a team. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "gaviao": "Puts on the Ronin suit by chance, becomes a mob target, learns from Clint and finds out her mother works for the Kingpin.",
        "marvels": "In the last scene, she receives a visit at home from Kamala, who invites her to form a team."
      }
    },
    {
      "id": "kamala",
      "type": "p",
      "group": "New heroes",
      "name": "Kamala Khan",
      "description": "Ms. Marvel.",
      "profile": [
        "A teenager from Jersey City, daughter of Pakistani immigrants and an avowed fan of Carol Danvers. A bangle inherited from her great-grandmother awakens in her the ability to create constructs of solid light. A friend discovers there is a mutation in her genes, and it is the first time the MCU uses the word.",
        "In The Marvels she discovers the bangle is half of a pair and starts swapping places with Carol and Monica. She leaves the film determined to put together a team of young heroes."
      ],
      "now": "Recruiting young heroes. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "msmarvel": "Gains powers from a family bangle, discovers its origin in the Partition of India and hears she has a mutation.",
        "marvels": "Lives out the dream of fighting beside Carol. In the end, she looks for Kate Bishop to put together a team."
      }
    },
    {
      "id": "monica",
      "type": "p",
      "group": "New heroes",
      "name": "Monica Rambeau",
      "description": "The agent who stayed on the other side.",
      "profile": [
        "Daughter of Maria Rambeau, Carol Danvers's best friend. A child in Captain Marvel, an adult and S.W.O.R.D. agent in WandaVision. She vanishes in the snap beside her mother's sickbed and, on returning, finds out she died of cancer three years earlier.",
        "She crosses Westview's energy barrier several times, and that rewrites her cells: she begins to see and absorb every kind of energy.",
        "At the end of The Marvels there is a tear between universes that can only be closed from the inside. She stays on the other side. She wakes in a hospital before a version of her mother and the X-Men's Beast."
      ],
      "now": "Stuck in a universe where X-Men live. She is the most direct link between the MCU and the mutants of Doomsday, and is not in the announced cast.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "She is 11 years old. She is the one who convinces her mother to help Carol.",
        "wandavision": "Comes back from the Blip and finds out her mother died. She crosses Westview's barrier three times and gains powers.",
        "marvels": "Demands that Carol account for thirty years of absence. She closes the tear between universes from the inside and wakes before Beast."
      }
    },
    {
      "id": "shuri",
      "type": "p",
      "group": "New heroes",
      "name": "Shuri",
      "description": "The new Black Panther.",
      "profile": [
        "Princess of Wakanda, T'Challa's younger sister and the mind behind the country's technology. She is the one who cures Bucky and who tries to separate the Mind Stone from Vision without killing him.",
        "She can't save her brother from the illness and shuts herself in the lab. When Namor kills her mother, Queen Ramonda, she recreates in the lab the herb that grants the Panther's powers and takes it. In the vision that follows, the one who receives her is not family, it is Killmonger. She defeats Namor and chooses not to kill him."
      ],
      "now": "Black Panther. She gave up contesting the throne, which M'Baku claims. She met her nephew, T'Challa's son, in Haiti.",
      "inDoomsday": true,
      "appearances": {
        "pantera": "Princess and head of technology. She makes her brother's suits and fights Killmonger.",
        "ginfinita": "Tries to separate the Mind Stone from Vision without killing him and is interrupted. She turns to dust.",
        "wakanda": "Can't save her brother. She loses her mother to Namor, recreates the herb, sees Killmonger on the ancestral plane and spares Namor.",
        "doomsday": "In the cast, as the Black Panther. A trailer shows the Fantastic Four in Wakanda.",
        "ultimato": "Returns from the snap for the final battle."
      }
    },
    {
      "id": "shangchi",
      "type": "p",
      "group": "New heroes",
      "name": "Shang-Chi",
      "description": "The heir to the ten rings.",
      "profile": [
        "Son of Wenwu, a warrior who lived a thousand years thanks to ten rings of unknown origin and ran a criminal organization named after them. Trained from childhood to kill, Shang-Chi flees at 14 and lives in hiding in the United States.",
        "His father, convinced that his dead wife is calling him, attacks Ta Lo, the magical village she came from, and releases a soul-devouring creature. Shang-Chi faces him, inherits the rings and defeats the creature.",
        "Wong introduces him to Banner and Carol. No one can identify the material or the age of the rings, only that they emit a signal."
      ],
      "now": "Bearer of the ten rings. The signal remains unexplained. A trailer shows him fighting Gambit.",
      "inDoomsday": true,
      "appearances": {
        "shangchi": "Flees his father at 14, is forced to return, faces him in his mother's village and inherits the ten rings.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "riri",
      "type": "p",
      "group": "New heroes",
      "name": "Riri Williams",
      "description": "Ironheart.",
      "profile": [
        "A student from Chicago, enrolled at MIT. She builds a vibranium detector, which puts her in Namor's sights, and an armor inspired by Stark's.",
        "In her own series, with no money to continue the project, she joins a gang led by Parker Robbins, the Hood, who draws his powers from a pact. In the end, she herself accepts a deal with Mephisto to get back her best friend, dead for years."
      ],
      "now": "Owes a pact to Mephisto. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "wakanda": "Invents the vibranium detector and becomes Namor's target. She fights in the final battle in an armor of her own.",
        "coracao": "Expelled from MIT, she joins a gang to fund the armor, faces the Hood and accepts a pact with Mephisto."
      }
    },
    {
      "id": "cassie",
      "type": "p",
      "group": "New heroes",
      "name": "Cassie Lang",
      "description": "Scott's daughter.",
      "profile": [
        "A child in the first two Ant-Man films. Her father vanishes for five years and finds her a teenager. In Quantumania she is 18, has been arrested at protests and built a beacon for the Quantum Realm, which is what sucks the family in. She wears a suit of her own."
      ],
      "now": "Lives with her father. Kathryn Newton is in the Doomsday cast.",
      "inDoomsday": true,
      "appearances": {
        "hformiga": "She is six and is the reason for everything her father does. She is taken hostage by Cross.",
        "ultimato": "Her father vanishes for five years and finds her a teenager.",
        "quantumania": "Builds the device that takes the family to the Quantum Realm, gets a suit and leads the rebels' liberation.",
        "hformiga2": "At ten, she helps her father trick the FBI during his house arrest.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "america",
      "type": "p",
      "group": "New heroes",
      "name": "America Chavez",
      "description": "The girl who crosses universes.",
      "profile": [
        "She comes from another universe. She opens star-shaped portals between realities, a power that only shows up when she is afraid and that, the first time, took her mothers away. She is the only known person with no variants."
      ],
      "now": "Training in magic at Kamar-Taj. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Arrives from another universe fleeing Wanda. She learns to control the portals and, instead of attacking, shows Wanda her children afraid of her. She stays at Kamar-Taj."
      }
    },
    {
      "id": "jen",
      "type": "p",
      "group": "New heroes",
      "name": "Jennifer Walters",
      "description": "She-Hulk.",
      "profile": [
        "A lawyer and Bruce Banner's cousin. In a car accident, his blood gets into a cut of hers. Unlike her cousin, she keeps her consciousness when transformed. She is hired to head a firm's superhuman law division. She talks to the camera."
      ],
      "now": "A lawyer in Los Angeles.",
      "inDoomsday": false,
      "appearances": {
        "mulherhulk": "Becomes a Hulk in an accident, tries to keep her career as a lawyer, is exposed by a forum of resentful men and rewrites her own ending."
      }
    },
    {
      "id": "marc",
      "type": "p",
      "group": "New heroes",
      "name": "Marc Spector",
      "description": "Moon Knight.",
      "profile": [
        "An American mercenary saved from death by Khonshu, the Egyptian moon god, in exchange for serving him. He has dissociative identity disorder: he shares his body with Steven Grant, a shy Englishman, and with a third identity that the two don't know about."
      ],
      "now": "No appearances since 2022.",
      "inDoomsday": false,
      "appearances": {
        "cavaleiro": "Discovers he shares his body with other identities, dies, confronts his childhood in the afterlife and returns to stop the goddess Ammit."
      }
    },
    {
      "id": "billy",
      "type": "p",
      "group": "New heroes",
      "name": "Billy Maximoff",
      "description": "Wanda's son who found a body.",
      "profile": [
        "Billy and his brother Tommy were created by Wanda's magic in Westview and ceased to exist with the town. At the instant the barrier falls, a teenager from the area, William Kaplan, dies in a car accident. Billy's soul takes over the body.",
        "He wakes without William's memories and with powers similar to his mother's. Three years later he looks for Agatha Harkness. Agatha All Along reveals that it was he, without knowing it, who created the Witches' Road."
      ],
      "now": "Looking for a body for his brother, Tommy, accompanied by Agatha's ghost. Tommy is in the cast of VisionQuest.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Is born and grows up in days inside Wanda's fantasy, with powers similar to hers. He dissolves with the town.",
        "estranho2": "A version of him, with another Wanda, lives on Earth-838. It is his fear that makes Wanda stop.",
        "agatha": "His soul took over the body of a boy killed in an accident. He frees Agatha, unknowingly creates the Witches' Road and puts his brother's soul in a body.",
        "visionquest": "Not confirmed. His brother, Tommy, is in the cast."
      }
    },
    {
      "id": "joaquin",
      "type": "p",
      "group": "New heroes",
      "name": "Joaquin Torres",
      "description": "The new Falcon.",
      "profile": [
        "An Air Force lieutenant who helps Sam Wilson in The Falcon and the Winter Soldier and keeps his old wings. In Brave New World he already flies as the Falcon and is gravely wounded."
      ],
      "now": "Recovered, at Sam's side.",
      "inDoomsday": true,
      "appearances": {
        "falcao": "An Air Force lieutenant who supports Sam and keeps his broken wings.",
        "cap4": "Already flying as the Falcon. He is shot down while trying to avoid the battle between the United States and Japan and invited to the Avengers.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "jane",
      "type": "p",
      "group": "New heroes",
      "name": "Jane Foster",
      "description": "The Mighty Thor.",
      "profile": [
        "An astrophysicist who finds Thor in the New Mexico desert. In The Dark World, the Aether enters her body. The two date and break up.",
        "Years later, with advanced cancer, she is called by the pieces of Mjolnir, which remake themselves for her. The hammer gives her Thor's powers and, with each use, takes the strength she had left to fight the disease. She dies in his arms and is welcomed in Valhalla."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Runs over Thor in the desert, shelters him and loses her research to S.H.I.E.L.D.",
        "thor2": "Absorbs the Aether by accident, is taken to Asgard and helps defeat Malekith in London.",
        "thor4": "With advanced cancer, she is chosen by the remade Mjolnir. She knows using it kills her and uses it anyway.",
        "ultimato": "In 2013, she sleeps in Asgard while Rocket takes the Reality Stone from her."
      }
    },
    {
      "id": "valquiria",
      "type": "p",
      "group": "New heroes",
      "name": "Valkyrie",
      "description": "King of New Asgard.",
      "profile": [
        "Last survivor of the Valkyries, an elite troop of Asgard massacred by Hela. Thor finds her on Sakaar, drunk and selling prisoners to the arena. She fights again and helps evacuate Asgard.",
        "She survives Thanos's attack and the snap. Thor hands her the government of New Asgard, in Norway."
      ],
      "now": "Rules New Asgard.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "A mercenary on Sakaar, she sells Thor to the Grandmaster. Reminded of Hela's massacre of her companions, she fights again.",
        "ultimato": "Looks after New Asgard while Thor drinks. She receives the throne from him.",
        "thor4": "A king bored with bureaucracy. She fights Gorr and is wounded.",
        "marvels": "A short appearance: she takes the Skrull refugees to New Asgard."
      }
    },
    {
      "id": "sylvie",
      "type": "p",
      "group": "New heroes",
      "name": "Sylvie",
      "description": "The Loki who opened the multiverse.",
      "profile": [
        "A Loki variant born a woman. The TVA arrested her as a child for a deviation she doesn't even remember, and she spent her life on the run, hiding in catastrophes where nothing she did would alter time.",
        "She only wants to destroy those who hunted her. On meeting He Who Remains, she hears from him that his death will unleash something worse, and kills him anyway. In the second season she tries an ordinary life in the 1980s and is the one who convinces Loki that people need to be able to choose."
      ],
      "now": "Free. Fate not shown.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Scatters bombs through the timeline, reveals to Loki what the TVA is and kills He Who Remains, even though warned of the consequences.",
        "loki2": "Lives in hiding in 1982. She spares Victor Timely and makes Loki admit why he wants to save the TVA."
      }
    },
    {
      "id": "mobius",
      "type": "p",
      "group": "New heroes",
      "name": "Mobius",
      "description": "The TVA analyst.",
      "profile": [
        "A TVA employee specializing in Lokis. He believes in the work until he finds out that everyone there is a kidnapped variant with an erased memory. In the life taken from him, he was a jet ski salesman with two sons.",
        "He becomes Loki's friend, the first Loki has. In the end, he leaves the TVA and watches from afar the life that would have been his."
      ],
      "now": "Out of the TVA.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Recruits Loki, finds out he was deceived his whole life and is pruned. He meets him again in the Void.",
        "loki2": "Helps try to save the Loom. He learns of the life taken from him and, in the end, leaves the TVA to look at it from afar."
      }
    },
    {
      "id": "agatha",
      "type": "p",
      "group": "New heroes",
      "name": "Agatha Harkness",
      "description": "The witch of Westview.",
      "profile": [
        "A witch who in 1693 absorbed the power of her own coven, her mother included. She has survived for centuries by stealing the magic of other witches. In WandaVision she poses as a nosy neighbor to find out how Wanda created the town.",
        "Wanda leaves her trapped in the persona, with no memory. Freed and powerless, she walks the Witches' Road with an improvised coven. The series reveals that she had a son, whom Death came to collect, and that the legend of the Road was a lie of hers. She sacrifices herself for Billy and returns as a ghost."
      ],
      "now": "A ghost, accompanying Billy.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Disguised as a neighbor, she manipulates Wanda's fantasy to find the source of her power. She loses and is left trapped in the persona.",
        "agatha": "Powerless, she walks the Witches' Road with a coven, kills one of her companions, sacrifices herself for Billy and returns as a ghost."
      }
    },
    {
      "id": "walker",
      "type": "p",
      "group": "New Avengers",
      "name": "John Walker",
      "description": "U.S. Agent.",
      "profile": [
        "An Army captain, decorated several times. The government picks him to be the new Captain America when Sam Wilson returns the shield. He badly wants to deserve the post and can't stand the comparison with Steve Rogers.",
        "He secretly takes a dose of the super-soldier serum. When his partner is killed in combat, he chases one of those responsible and kills him with the shield, surrendered, in a square full of cell phones. He is dismissed without honors. Valentina picks him up and gives him a new name, U.S. Agent.",
        "In Thunderbolts* he is divorced and bitter. He is arrogant with the group and, in the end, stays."
      ],
      "now": "A member of the New Avengers.",
      "inDoomsday": true,
      "appearances": {
        "falcao": "Chosen by the government to be Captain America. He takes the serum, kills a surrendered man and loses the post.",
        "thunder": "Divorced and bitter, he survives Valentina's trap and stays with the group.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "ava",
      "type": "p",
      "group": "New Avengers",
      "name": "Ava Starr",
      "description": "The Ghost.",
      "profile": [
        "Daughter of a former colleague of Hank Pym. An explosion in a quantum lab kills her parents and leaves her body unstable: she passes through walls and feels pain all the time, with her cells falling apart. S.H.I.E.L.D. raises her to use her as an assassin.",
        "In Ant-Man and the Wasp, she tries to steal Janet van Dyne's quantum energy to heal herself. Janet stabilizes her willingly. She reappears years later as one of Valentina's agents, with her powers under control."
      ],
      "now": "A member of the New Avengers.",
      "inDoomsday": true,
      "appearances": {
        "hformiga2": "Steals Pym's lab to take from Janet the energy that would cure her. She receives help from Janet herself.",
        "thunder": "One of Valentina's agents, she kills Antonia Dreykov in the vault and joins the group.",
        "doomsday": "In the cast, with the New Avengers."
      }
    },
    {
      "id": "alexei",
      "type": "p",
      "group": "New Avengers",
      "name": "Alexei Shostakov",
      "description": "The Red Guardian.",
      "profile": [
        "The Soviet answer to Captain America, with a serum of its own. In the 1990s he was the father in the fake Ohio family in which Natasha and Yelena grew up. After the mission, the Soviet Union dumped him in a prison.",
        "Vain, nostalgic for glories that may never have existed, and sincerely attached to his fake daughters. In Thunderbolts* he works as a limousine driver and is the most excited about the idea of being an Avenger."
      ],
      "now": "A member of the New Avengers.",
      "inDoomsday": true,
      "appearances": {
        "viuva": "Broken out of prison by his two fake daughters, he helps bring down the Red Room and tries to get close to them again.",
        "thunder": "A limousine driver, he overhears Valentina's plan, rescues Yelena and is the proudest of becoming an Avenger.",
        "doomsday": "In the cast, with the New Avengers."
      }
    },
    {
      "id": "bob",
      "type": "p",
      "group": "New Avengers",
      "name": "Bob Reynolds",
      "description": "The Sentry, and the Void.",
      "profile": [
        "Robert Reynolds had a life of abuse and addiction and volunteered as a guinea pig in a secret project of Valentina de Fontaine's, who wanted to manufacture a hero to replace the Avengers. He was the only one to survive.",
        "As the Sentry, he flies, is practically invulnerable and has strength comparable to anyone's in the MCU. The problem is the Void: Bob's depressive side took on a form of its own and turns people into shadows, trapping each one in the worst memory they have. The more Bob tries to fight it, the stronger it gets.",
        "Yelena and the others enter that space and bring him out by standing beside him. Bob decides not to use his powers, for fear of bringing the Void back."
      ],
      "now": "Lives with the New Avengers and doesn't go into the field. He is the most powerful member in the film and the most unpredictable.",
      "inDoomsday": true,
      "appearances": {
        "thunder": "Wakes up with no memory in the vault. He becomes the Sentry, loses control and the Void covers New York. He is brought back by the group.",
        "doomsday": "In the cast. It isn't known whether he uses his powers again."
      }
    },
    {
      "id": "valentina",
      "type": "p",
      "group": "New Avengers",
      "name": "Valentina de Fontaine",
      "description": "The CIA director behind the New Avengers.",
      "profile": [
        "Countess Valentina Allegra de Fontaine. She turns up in cameos in several Phase 4 titles recruiting people on the downswing: John Walker, Yelena Belova. In Wakanda Forever she is already CIA director.",
        "She runs a front company with illegal experiments on humans, among them the project that created the Sentry. When Congress begins proceedings to remove her, she orders her agents to kill each other to erase evidence. They survive, save New York, and she, on the spot, presents them to the press as the New Avengers. That makes her untouchable."
      ],
      "now": "CIA director and sponsor of the New Avengers. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Approaches John Walker after his dismissal and gives him the name U.S. Agent.",
        "viuva": "In the credits scene, she shows Yelena a photo of Clint Barton as the culprit in Natasha's death.",
        "wakanda": "Already CIA director. She arrests her ex-husband, Agent Everett Ross, for helping Wakanda.",
        "thunder": "Tries to erase the evidence of her crimes by killing her own agents. When that fails, she turns the group into the New Avengers and saves herself."
      }
    },
    {
      "id": "okoye",
      "type": "p",
      "group": "Wakanda and Talokan",
      "name": "Okoye",
      "description": "General of the Dora Milaje.",
      "profile": [
        "Commander of Wakanda's all-women royal guard. Loyal to the throne above all. She is one of the few survivors of the snap and helps Natasha keep order during the Blip.",
        "In Wakanda Forever she loses her post after failing a mission and receives a new armor from Shuri."
      ],
      "now": "Former general. She supports Wakanda in the new armor. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "A general loyal to the throne, she serves Killmonger until he violates tradition, and then turns against him.",
        "ginfinita": "Fights beside T'Challa and watches him turn to dust.",
        "wakanda": "Loses Shuri to Talokan and is dismissed by the queen. She returns to the fight in a new armor.",
        "ultimato": "One of the survivors who keep order during the Blip."
      }
    },
    {
      "id": "mbaku",
      "type": "p",
      "group": "Wakanda and Talokan",
      "name": "M'Baku",
      "description": "The leader of the Jabari.",
      "profile": [
        "Chief of the mountain tribe, which lives apart from the rest of Wakanda and doesn't use vibranium. He challenges T'Challa for the throne, loses, and later saves his life. In time he becomes Shuri's most candid advisor. At the end of Wakanda Forever, he puts himself forward to contest the throne."
      ],
      "now": "Claimant to the throne of Wakanda.",
      "inDoomsday": true,
      "appearances": {
        "pantera": "Challenges T'Challa at the coronation and loses. Later he shelters the royal family and leads the Jabari into battle.",
        "ginfinita": "Leads the Jabari in the defense of Wakanda.",
        "wakanda": "Shelters the people in the mountains, advises Shuri against seeking vengeance and puts himself forward for the throne.",
        "doomsday": "In the cast.",
        "ultimato": "Returns for the final battle."
      }
    },
    {
      "id": "namor",
      "type": "p",
      "group": "Wakanda and Talokan",
      "name": "Namor",
      "description": "The king of Talokan.",
      "profile": [
        "Born in 1571, the son of a Mayan people who, fleeing the Spanish and smallpox, took a plant that grew on vibranium and began to breathe underwater. Namor was born different even among them: he breathes air, has wings on his ankles and barely ages. He calls himself a mutant.",
        "He rules Talokan and hides it from the world. When the Americans begin searching for vibranium in the ocean, he proposes an alliance to Wakanda against the surface and, when refused, floods the capital and kills Queen Ramonda.",
        "Shuri defeats him and spares him. He accepts the surrender out of calculation: he thinks that one day Wakanda will need Talokan against the rest of the world."
      ],
      "now": "A wary ally of Wakanda. In the Doomsday cast, with two of his warriors, Namora and Attuma. A trailer shows him fighting Shuri and M'Baku.",
      "inDoomsday": true,
      "appearances": {
        "wakanda": "Massacres the American expedition, demands the detector's inventor, floods Wakanda and kills the queen. Defeated by Shuri, he accepts peace out of calculation.",
        "doomsday": "In the cast, with Namora and Attuma."
      }
    },
    {
      "id": "killmonger",
      "type": "p",
      "group": "Wakanda and Talokan",
      "name": "Killmonger",
      "description": "The cousin who lost and left a mark.",
      "profile": [
        "N'Jadaka, the son of a Wakandan prince killed by his own brother, the king, and left an orphan in the United States. He becomes an elite soldier and returns to claim the throne, wanting to arm the world's oppressed peoples with vibranium.",
        "He beats T'Challa in ritual combat, rules for days and dies. His argument makes T'Challa open the country. He reappears in Shuri's vision."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "Abandoned as a child in the United States, he becomes an elite soldier and returns to take the throne and arm the oppressed. He beats T'Challa, loses the rematch and chooses to die.",
        "wakanda": "He is the one who receives Shuri on the ancestral plane and asks what kind of ruler she will be."
      }
    },
    {
      "id": "reed",
      "type": "p",
      "group": "Fantastic Four",
      "name": "Reed Richards",
      "description": "Mister Fantastic.",
      "profile": [
        "The smartest man on Earth-828. He led the space flight in which the four were hit by cosmic rays. His body stretches like rubber. He thinks of every problem as an equation, which makes him brilliant and, at times, cold: he is the one who calculates out loud that handing over his son would save the planet, even without considering doing it.",
        "A version of him, from another Earth, 838, appears among the Illuminati in Multiverse of Madness and is killed by Wanda."
      ],
      "now": "Arrived on the main Earth with the team.",
      "inDoomsday": true,
      "appearances": {
        "estranho2": "A variant, from Earth-838, is a member of the Illuminati and dies at Wanda's hands.",
        "quarteto": "Confirms the Galactus threat, calculates the options and designs the teleportation bridges. He rescues his son in the climax.",
        "thunder": "Doesn't appear; only the team's ship.",
        "doomsday": "In the cast. A trailer shows him confronting Doom."
      }
    },
    {
      "id": "sue",
      "type": "p",
      "group": "Fantastic Four",
      "name": "Sue Storm",
      "description": "The Invisible Woman.",
      "profile": [
        "She turns invisible and projects force fields. She is also the group's diplomat: she created a foundation that convinced the countries of Earth-828 to disarm. Married to Reed.",
        "She is presented as the most powerful of the four. In the climax, she pushes Galactus into a portal with an effort that kills her, and it is her newborn son who brings her back."
      ],
      "now": "Arrived on the main Earth with the team. She is the one who catches Doom with Franklin.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Pregnant at the start, she gives birth in space. She convinces the world to fight together, pushes Galactus into the portal, dies and is brought back by her son.",
        "doomsday": "In the cast. She is the voice that, in a trailer, tells who Doom was."
      }
    },
    {
      "id": "johnny",
      "type": "p",
      "group": "Fantastic Four",
      "name": "Johnny Storm",
      "description": "The Human Torch.",
      "profile": [
        "Sue's younger brother. He covers his body in fire and flies. He is usually the team's impulsive one; in this film he is also the one who deciphers the Silver Surfer's language and uncovers her past."
      ],
      "now": "Arrived on the main Earth with the team.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Deciphers the Silver Surfer's language, discovers her name and past and is ready to die to push Galactus.",
        "doomsday": "In the cast. A trailer shows him hugging his nephew."
      }
    },
    {
      "id": "ben",
      "type": "p",
      "group": "Fantastic Four",
      "name": "Ben Grimm",
      "description": "The Thing.",
      "profile": [
        "The mission's pilot and Reed's best friend. The cosmic rays turned his body to stone permanently. He is the strongest in the group and the one who most misses being ordinary."
      ],
      "now": "Arrived on the main Earth with the team.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Pilots the ship in the escape from Galactus and is the one who mixes most with the neighborhood's residents.",
        "doomsday": "In the cast. A teaser shows him facing M'Baku, in Wakanda."
      }
    },
    {
      "id": "franklin",
      "type": "p",
      "group": "Fantastic Four",
      "name": "Franklin Richards",
      "description": "The baby Galactus and Doom want.",
      "profile": [
        "Son of Reed and Sue, conceived after his parents gained powers. Galactus senses in him a force capable of inheriting his hunger and freeing him from it. Still a newborn, he brings his mother back to life.",
        "In the comics, Franklin is capable of creating universes. The film doesn't say how far his power goes."
      ],
      "now": "About four years old. He was visited by Doctor Doom and appears in Doomsday; a trailer shows him in the arms of his uncle Johnny while a world falls apart.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "Galactus senses his power before he is born and demands him in exchange for Earth. He is born on the ship, serves as bait and revives his mother.",
        "doomsday": "Appears in the film."
      }
    },
    {
      "id": "xavier",
      "type": "p",
      "group": "Mutants",
      "name": "Charles Xavier",
      "description": "Professor X.",
      "profile": [
        "The most powerful telepath in his universe. He uses a wheelchair. He founded a school that shelters young mutants and a team, the X-Men, and argues that humans and mutants can coexist. He extends his reach with a machine called Cerebro, which locates any mutant on the planet.",
        "A variant of him, from Earth-838, leads the Illuminati in Multiverse of Madness and is killed by Wanda."
      ],
      "now": "Patrick Stewart returns to the role in Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Takes in Wolverine and Rogue, falls into a coma because of Mystique's sabotage and, recovered, visits Magneto in prison.",
        "xmen2": "Captured by Stryker, he is forced by illusions to look for all mutants, then all humans, to kill them.",
        "estranho2": "The Earth-838 variant tries to enter Wanda's mind to free that world's Wanda, and is killed.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "magneto",
      "type": "p",
      "group": "Mutants",
      "name": "Magneto",
      "description": "Xavier's friend and adversary.",
      "profile": [
        "Erik Lehnsherr controls magnetic fields and, with them, any metal. He survived a concentration camp as a child. From that experience he draws the certainty that humans will try to exterminate mutants and that it is necessary to act first.",
        "He wears a helmet that blocks telepathy. He is not a simple villain: he is right about the danger and wrong about the remedy. He plays chess with Xavier even in prison."
      ],
      "now": "Ian McKellen returns to the role in Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Kidnaps a senator and then Rogue to turn world leaders into mutants. He is defeated at the Statue of Liberty.",
        "xmen2": "Escapes from prison, saves the X-Men, allies with them and, at the decisive moment, turns Stryker's plan against humans.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "wolverine",
      "type": "p",
      "group": "Mutants",
      "name": "Wolverine",
      "description": "Logan.",
      "profile": [
        "A mutant with near-unlimited regeneration, animal senses and claws. A military program coated his skeleton in adamantium and wiped his memory. He is the most popular X-Man and the least disciplined.",
        "The Logan of the original films died in 2029, in the film Logan. The one in Deadpool & Wolverine is another, from another universe: in that world, he abandoned the X-Men and all of them were killed in his absence. He carries that around drinking and wears the yellow suit as penance."
      ],
      "now": "Lives on Earth-10005 with Deadpool. Hugh Jackman took part in Doomsday promotion, but is not in the official cast.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "Arrives at the school with no past, grows fond of Rogue and nearly dies saving her.",
        "xmen2": "Protects the students in the raid, meets Stryker again and discovers who gave him his claws.",
        "deadpool": "A variant who let the X-Men die. Pulled out of his world by Wade, he learns to fight for someone again and stays on Earth-10005."
      }
    },
    {
      "id": "deadpool",
      "type": "p",
      "group": "Mutants",
      "name": "Deadpool",
      "description": "Wade Wilson.",
      "profile": [
        "A mercenary with terminal cancer who accepted an experiment and came out of it disfigured and with a regeneration like Wolverine's. He talks nonstop and knows he is in a movie.",
        "He is from Earth-10005. He tried to join the Avengers and was turned down. When the TVA offers him a place on the main timeline in exchange for letting his universe die, he refuses and goes to save his friends."
      ],
      "now": "Lives on Earth-10005. Ryan Reynolds and Hugh Jackman appeared in a Marvel video in August 2026 joking about joining the film; they are not in the official cast.",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Turned down by the Avengers, he finds out his universe is going to die, looks for a replacement Wolverine and risks dying to shut down the TVA's machine."
      }
    },
    {
      "id": "jean",
      "type": "p",
      "group": "Mutants",
      "name": "Jean Grey",
      "description": "The X-Men's telepath.",
      "profile": [
        "A telepath and telekinetic, the doctor at Xavier's school in the Fox films. In the second film, she holds back a ruptured dam so the team can escape and dies. In the comics she is the host of the Phoenix, a cosmic force.",
        "The MCU got its own Jean Grey in Spider-Man: Brand New Day, played by Sadie Sink. She is a young woman whose older sister, Sara, also a telepath, was kidnapped by the Department of Damage Control and died in a cell. Jean spends the film jumping from mind to mind and attacking the agency's prisons to find out what happened. She possesses the Scorpion, Frank Castle and Bruce Banner. The only head she can't get into is Peter Parker's.",
        "She is not a villain. When Peter lets her see his memories, she recognizes in him the same loss and gives up on killing the agency's director. She has no relation to the Jean of the old films, who is from another universe."
      ],
      "now": "The MCU's Jean left New York after saving Peter's life. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "The team's doctor and telepath. She discovers where Magneto will strike.",
        "xmen2": "Has premonitions, sees her powers grow and dies holding back the dam's water so the jet can escape.",
        "aranha4": "The antagonist. She attacks government prisons by possessing other people, in search of her sister. She reconciles with Peter and leaves."
      }
    },
    {
      "id": "ciclope",
      "type": "p",
      "group": "Mutants",
      "name": "Cyclops",
      "description": "Scott Summers.",
      "profile": [
        "Field leader of the X-Men. He fires beams from his eyes and can't turn them off, which is why he wears a visor. He is Xavier's model student and Jean Grey's boyfriend."
      ],
      "now": "James Marsden returns to the role in Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Leads the rescue of Wolverine and Rogue and is the one who knocks Magneto down.",
        "xmen2": "Captured and controlled by Stryker, he fights Jean. He loses her in the end.",
        "doomsday": "In the cast. A trailer shows him screaming under a collapsing sky, at the ruined mansion."
      }
    },
    {
      "id": "mistica",
      "type": "p",
      "group": "Mutants",
      "name": "Mystique",
      "description": "The shapeshifter.",
      "profile": [
        "She takes on the appearance of anyone. Her natural form is blue and scaly, and she refuses to hide it. In the first two films she is Magneto's chief ally."
      ],
      "now": "Rebecca Romijn returns to the role in Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Sabotages Cerebro disguised as a student and, in the end, takes the senator's place.",
        "xmen2": "Gets Magneto out of prison and opens Stryker's base disguised as Wolverine.",
        "doomsday": "In the cast. A trailer shows her fighting Yelena."
      }
    },
    {
      "id": "noturno",
      "type": "p",
      "group": "Mutants",
      "name": "Nightcrawler",
      "description": "Kurt Wagner.",
      "profile": [
        "A German mutant with blue skin and a tail who teleports in a cloud of smoke. Religious and gentle. In the second film he is manipulated into attacking the President of the United States and later joins the X-Men."
      ],
      "now": "Alan Cumming returns to the role in Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen2": "Controlled by Stryker, he attacks the president. Free, he helps rescue the students and free Xavier.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "fera",
      "type": "p",
      "group": "Mutants",
      "name": "Beast",
      "description": "Hank McCoy.",
      "profile": [
        "A brilliant scientist, covered in blue fur, with an animal's strength and agility. Kelsey Grammer played him in the third X-Men film, in 2006.",
        "He is the first Fox X-Man to appear in an MCU film: in The Marvels' mid-credits scene, he is the one who examines Monica Rambeau when she wakes in another universe."
      ],
      "now": "Kelsey Grammer returns to the role in Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "marvels": "In the credits scene, he is the doctor who receives Monica Rambeau in another universe and explains where she is.",
        "doomsday": "In the cast."
      }
    },
    {
      "id": "gambit",
      "type": "p",
      "group": "Mutants",
      "name": "Gambit",
      "description": "Remy LeBeau.",
      "profile": [
        "A thief from New Orleans who charges objects with energy and makes them explode; his favorite weapon is playing cards. Channing Tatum tried for years to make a film about the character at Fox, which never came out. The joke becomes a scene in Deadpool & Wolverine, where Gambit lives in the Void with other forgotten heroes."
      ],
      "now": "Channing Tatum is in the Doomsday cast.",
      "inDoomsday": true,
      "appearances": {
        "deadpool": "Lives in the Void with other forgotten heroes and fights in the raid on Cassandra Nova's base.",
        "doomsday": "In the cast. A trailer shows him fighting Shang-Chi."
      }
    },
    {
      "id": "quill",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Peter Quill",
      "description": "Star-Lord.",
      "profile": [
        "Abducted from Earth in 1988, at eight years old, on the night his mother died. Raised by Yondu, leader of a band of space pirates. He carries a tape player with the songs his mother recorded.",
        "He discovers his father is Ego, a Celestial being who wanted to use him to spread across the universe, and that Ego caused his mother's cancer. He loves Gamora, and her death makes him lose his head on Titan, just as the plan against Thanos was working."
      ],
      "now": "Back on Earth, with his grandfather. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Steals the orb, brings the group together and holds the Power Stone with his friends' help.",
        "gg2": "Meets his father, Ego, finds out he killed his mother and destroys him. He loses Yondu.",
        "ginfinita": "Tries to kill Gamora at her request and can't. On Titan, on learning she died, he attacks Thanos and ruins the plan. He turns to dust.",
        "gg3": "Drinks because of Gamora, saves Rocket and returns to Earth to see his grandfather again.",
        "ultimato": "In 2014, he is knocked out by Rhodes and Nebula before stealing the orb. In 2023, he returns from the snap and meets a Gamora who doesn't know him.",
        "thor4": "Says goodbye to Thor at the start of the film.",
        "ggnatal": "Gets a kidnapped actor as a present and discovers he has a sister."
      }
    },
    {
      "id": "gamora",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Gamora",
      "description": "Thanos's daughter.",
      "profile": [
        "Thanos killed half of her people and adopted her as a child. She was trained to be the most feared assassin in the galaxy and betrayed him. She was the only one who knew where the Soul Stone was. Thanos truly loves her, which is why her sacrifice on Vormir counts.",
        "The Gamora who died did not return. The one who exists today came from 2014 with the Thanos of the past, before meeting the Guardians. She has no memory of Quill."
      ],
      "now": "The 2014 variant lives with the Ravager pirates.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Sent to get the orb, she betrays Thanos and stays with the Guardians.",
        "ginfinita": "Thanos captures her and forces her to reveal where the Soul Stone is. She is thrown off the cliff on Vormir.",
        "ultimato": "The 2014 Gamora comes to the future with her father, switches sides and disappears after the battle.",
        "gg3": "The variant lives with the pirates. She helps the Guardians and makes clear she is not the woman Quill loved.",
        "gg2": "Fights Nebula and, for the first time, listens to her."
      }
    },
    {
      "id": "rocket",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Rocket",
      "description": "The raccoon.",
      "profile": [
        "An animal from Earth captured and modified by a scientist, the High Evolutionary, obsessed with creating the perfect species. Rocket proved smarter than his creator and fled after watching his cellmates be killed.",
        "A pilot, engineer and grump. He is one of the few Guardians who survive the snap and spends the Blip with the Avengers."
      ],
      "now": "Captain of the new Guardians lineup.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "A bounty hunter who goes after Quill, is arrested with him and plans the escape.",
        "ginfinita": "Accompanies Thor to Nidavellir and fights in Wakanda. He is the only Guardian left on Earth.",
        "ultimato": "Helps build the time machine and goes to Asgard to take the Reality Stone from Jane Foster.",
        "gg3": "Wounded, he remembers his childhood as the High Evolutionary's test subject. He saves the pups, spares his creator and becomes captain.",
        "gg2": "Steals the Sovereign's batteries, is captured with Yondu and builds the bomb that kills Ego.",
        "thor4": "An appearance at the start, with Thor aboard.",
        "ggnatal": "Gets Bucky Barnes's arm as a present."
      }
    },
    {
      "id": "groot",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Groot",
      "description": "The tree.",
      "profile": [
        "A plant being who only says his own name. The original Groot sacrifices himself in the first film. The current one grew from a twig of his and is, in practice, a son."
      ],
      "now": "With the Guardians, with Rocket.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Rocket's partner. He wraps his friends in his body as the ship crashes and dies. A twig of his is replanted.",
        "ginfinita": "A teenager. He gives his own arm to serve as a handle for Thor's axe and turns to dust.",
        "gg2": "A baby. He is the one who carries the bomb to Ego's core.",
        "ultimato": "Returns from the snap for the final battle.",
        "thor4": "An appearance at the start.",
        "ggnatal": "Takes part in the party.",
        "gg3": "An adult, he fights alongside the team and stays with Rocket."
      }
    },
    {
      "id": "drax",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Drax",
      "description": "The Destroyer.",
      "profile": [
        "Had his wife and daughter killed on Thanos's orders and lives for revenge. He takes everything literally. At the end of the trilogy he discovers his talent is being a father."
      ],
      "now": "Looks after children rescued on Knowhere.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Wants to kill Ronan for his family's death and nearly ruins everything by calling him out to a duel.",
        "ginfinita": "Attacks Thanos too early on Knowhere. He turns to dust on Titan.",
        "gg3": "Discovers, caring for the rescued children, that he is good at being a father. He stays on Knowhere.",
        "gg2": "Makes friends with Mantis on Ego's planet.",
        "ultimato": "Returns from the snap for the final battle.",
        "thor4": "An appearance at the start.",
        "ggnatal": "Goes to Earth with Mantis to kidnap Kevin Bacon."
      }
    },
    {
      "id": "nebulosa",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Nebula",
      "description": "Thanos's other daughter.",
      "profile": [
        "Adopted like Gamora. Each time she lost a duel to her sister, Thanos replaced a part of her body with machinery. She starts as a villain and has the longest turnaround of the saga.",
        "She survives the snap alongside Stark. In Endgame, her 2014 version receives her memories through the network the two share, and that is how Thanos finds out about the plan. She kills her own past version."
      ],
      "now": "Leads the Knowhere community.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Serves Ronan and hates her sister.",
        "gg2": "Tells Gamora what Thanos did to her after each defeat. The two reconcile.",
        "ginfinita": "Tortured by Thanos, she escapes and reaches Titan. She survives the snap alongside Stark.",
        "ultimato": "The 2014 version picks up her memories and hands the plan to Thanos. The current one kills the one from the past.",
        "gg3": "Takes over running Knowhere.",
        "thor4": "An appearance at the start.",
        "ggnatal": "Gives Rocket Bucky Barnes's arm, as a present."
      }
    },
    {
      "id": "mantis",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Mantis",
      "description": "The empath.",
      "profile": [
        "She feels and alters the emotions of anyone she touches. She was raised by Ego as a servant. The holiday special reveals that she is also his daughter, and therefore Quill's sister."
      ],
      "now": "Left on her own to find out who she is.",
      "inDoomsday": false,
      "appearances": {
        "gg2": "Ego's servant. She warns Drax of the plan and keeps the planet asleep during the fight.",
        "ginfinita": "On Titan, she puts Thanos to sleep so the gauntlet can be pulled off. She turns to dust.",
        "ggnatal": "Kidnaps Kevin Bacon as a present and tells Quill she is his sister.",
        "gg3": "Calms the monsters on the ship and, in the end, leaves on her own.",
        "ultimato": "Returns from the snap for the final battle.",
        "thor4": "An appearance at the start."
      }
    },
    {
      "id": "matt",
      "type": "p",
      "group": "Street-level heroes",
      "name": "Matt Murdock",
      "description": "Daredevil.",
      "profile": [
        "A lawyer from Hell's Kitchen, in New York, blind since a childhood accident with chemicals that heightened his other senses. By day he defends poor people; by night he fights masked. He is Catholic and lives in conflict with his own violence.",
        "He comes from the Netflix series, which the MCU came to treat as part of the story. In Daredevil: Born Again, his best friend, Foggy Nelson, is murdered, and he hangs up the mask for a year. He returns when Wilson Fisk, as mayor, creates a police force to hunt vigilantes.",
        "In the second season he leads the resistance. He beats Fisk in a fight and spares him. To bring him down for good, he reveals in court that he is Daredevil."
      ],
      "now": "In prison for what he did as Daredevil, with his identity public. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "aranha3": "One scene: as a lawyer, he gets the charges against Peter dropped and catches a brick in midair.",
        "mulherhulk": "Faces Jennifer in court, fights alongside her in a yellow suit and the two get involved.",
        "eco": "Appears in a memory of Maya's.",
        "demolidor": "Loses his best friend, abandons the mask, returns, leads the resistance against Fisk and ends up in prison after revealing who he is."
      }
    },
    {
      "id": "fisk",
      "type": "p",
      "group": "Street-level heroes",
      "name": "Wilson Fisk",
      "description": "The Kingpin.",
      "profile": [
        "Head of New York's organized crime. Physically enormous, he speaks softly and explodes into violence. He loves his wife, Vanessa, and sees himself as someone who wants to save the city.",
        "In Hawkeye he is shot by Maya Lopez, whom he raised as a niece. He survives and, in Echo, decides to trade crime for politics. He gets elected mayor and creates a task force against vigilantes, with police powers and a port through which weapons come in.",
        "In the second season of Daredevil: Born Again, Vanessa dies as a result of an attack, and he falls apart: he kills the surgeon, orders protesters shot. Exposed in court by Matt Murdock, he accepts leaving the country to avoid prison."
      ],
      "now": "Exiled, widowed and out of City Hall.",
      "inDoomsday": false,
      "appearances": {
        "gaviao": "Revealed as the boss above the gang and a partner of Kate's mother. He is brought down by her and shot by Maya.",
        "eco": "Survives the shot, tries to bring Maya back as an heir, is rejected and decides to go into politics.",
        "demolidor": "Mayor. He hounds vigilantes, loses his wife and, exposed in court, accepts exile."
      }
    },
    {
      "id": "frank",
      "type": "p",
      "group": "Street-level heroes",
      "name": "Frank Castle",
      "description": "The Punisher.",
      "profile": [
        "A Marine whose wife and two children were killed in a shooting. He began executing criminals. He has no powers and no code beyond that. Daredevil considers him a murderer, and he considers Daredevil a coward.",
        "He comes from the Netflix series. In Daredevil: Born Again, he demands a reaction from Matt and is arrested by Mayor Fisk. The special One Last Kill shows him after escaping, alone, seeing ghosts and close to suicide, until he decides to protect his neighbors from an attack. In Brand New Day, he works reluctantly with Peter Parker."
      ],
      "now": "Active in New York, back in uniform. Not in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "demolidor": "In the first season, he provokes Matt into returning to action and helps in the final attack. He is arrested by Fisk.",
        "justiceiro": "Thinks about killing himself, is hunted by criminals across the city and chooses to protect a family instead of taking revenge.",
        "aranha4": "Chases the same targets as Peter. He is possessed by Jean Grey and, in the end, shoots at her from afar; Peter takes the bullet."
      }
    },
    {
      "id": "maya",
      "type": "p",
      "group": "Street-level heroes",
      "name": "Maya Lopez",
      "description": "Echo.",
      "profile": [
        "Deaf, of the Choctaw Nation, with a prosthetic leg. She copies any movement she sees. Her father worked for Fisk and was killed by Ronin during the Blip; Fisk raised her and used her. When she discovers it was he who gave up her father, she shoots him."
      ],
      "now": "In Oklahoma, with her family.",
      "inDoomsday": false,
      "appearances": {
        "gaviao": "Commands the gang hunting Ronin. She discovers that Fisk arranged her father's death and shoots him.",
        "eco": "Returns to Oklahoma, inherits the gift of her ancestors and, instead of killing Fisk, tries to heal him."
      }
    },
    {
      "id": "loki",
      "type": "p",
      "group": "Asgard",
      "name": "Loki",
      "description": "Two Lokis: the one who died and the one who holds the multiverse.",
      "profile": [
        "The son of a frost giant, abandoned as a baby and adopted by Odin. He grows up in Thor's shadow, discovers his origin and rebels. A master of illusions and lies. He is the villain of The Avengers, in the service of Thanos.",
        "The original Loki spends the following films oscillating between betraying and helping his brother and dies at Thanos's hands, in the first scene of Infinity War, attempting one last strike.",
        "The series' Loki is another: the one from 2012, who grabs the Tesseract during Endgame's time heist. Arrested by the TVA, he watches on a film reel the life he would have had, including his mother's death and his own. Without having lived the redemption, he makes one of his own. At the end of the second season, instead of the throne he always wanted, he takes on a burden: he stays alone at the end of time, holding all the branches so that they may live."
      ],
      "now": "Sustains the multiverse, alone at the end of time. He is in the Doomsday cast, and a trailer shows him with a TVA badge.",
      "inDoomsday": true,
      "appearances": {
        "thor": "Lets the frost giants into Asgard to ruin his brother's coronation. He discovers he is the son of their king, takes the throne with Odin asleep, tries to destroy the giants' world and, rejected by his father, lets go into the abyss.",
        "ving1": "Receives a scepter and an army from Thanos. He steals the Tesseract, lets himself be captured to divide the Avengers, kills Coulson and opens the portal over New York. He is defeated and taken prisoner to Asgard.",
        "thor2": "Imprisoned, he loses his mother without being able to say goodbye. Thor frees him to guide him to the world of the elves. He fakes dying saving his brother and, in the end, takes the throne disguised as Odin.",
        "ragnarok": "Unmasked by Thor. He falls to Sakaar, wins the Grandmaster's trust, tries to betray his brother once more and then returns with a ship to save the people. He is the one who puts Surtur's crown in the flame.",
        "ginfinita": "Hands the Tesseract to Thanos to save Thor's life, feigns loyalty and tries to stab him. Thanos strangles him.",
        "ultimato": "In 2012, right after being arrested, he sees the Tesseract fall at his feet through the time travelers' carelessness and vanishes with it.",
        "loki1": "Arrested by the TVA, he watches what his life would have been. He teams up with Mobius, meets Sylvie, falls in love with her and reaches the agency's creator. He tries to stop her from killing him.",
        "loki2": "Learns to control his leaps through time, tries for centuries to save the Loom and, in the end, destroys it and holds all the timelines himself.",
        "doomsday": "In the cast. He is the one keeping the collapsing multiverse standing."
      }
    },
    {
      "id": "odin",
      "type": "p",
      "group": "Asgard",
      "name": "Odin",
      "description": "The king of Asgard.",
      "profile": [
        "Father of Thor and adoptive father of Loki. He presents himself as a wise and peaceful king. Ragnarok reveals that the empire was conquered in blood, with his firstborn Hela as general, and that he imprisoned her and erased her from history when she wanted to continue.",
        "He dies in Norway, and his death releases Hela."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Exiles Thor for arrogance and falls into a deep sleep. He wakes in time to hold on to his sons and denies Loki the approval he asks for.",
        "thor2": "Loses Frigga and wants to wait for the enemy. He is replaced on the throne by Loki.",
        "ragnarok": "Dies in Norway after telling his sons about Hela. He appears to Thor in a vision."
      }
    },
    {
      "id": "hela",
      "type": "p",
      "group": "Asgard",
      "name": "Hela",
      "description": "The goddess of death.",
      "profile": [
        "Odin's eldest daughter, imprisoned for millennia. Her power comes from Asgard: the closer to it, the stronger she is. She destroys Mjolnir with one hand. Thor only defeats her by letting a fire demon fulfill the prophecy of Ragnarok and destroy the realm with her inside."
      ],
      "now": "Presumed dead with Asgard.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "Released by her father's death, she breaks Mjolnir, takes Asgard and reveals how the empire was built. She dies with the planet."
      }
    },
    {
      "id": "thanos",
      "type": "p",
      "group": "Villains",
      "name": "Thanos",
      "description": "The villain of the Infinity Saga.",
      "profile": [
        "A Titan who watched his planet die of overpopulation. He proposed killing half of the inhabitants by lottery, was called mad, and the planet died. Since then he believes he has the duty to do this across the whole universe. He doesn't see himself as a villain.",
        "For years he acts through intermediaries: he lends an army to Loki, sends Ronan to fetch the Power Stone. When he decides to act alone, he gathers all six Stones in a few days. He pays what he considers a price, Gamora's life, and wins.",
        "After the snap, he uses the Stones to destroy them and retires to a farm. Thor beheads him there. In Endgame, a version of him from 2014 concludes that half isn't enough, because the survivors don't forget, and decides to erase everything. It is that version that Stark eliminates."
      ],
      "now": "Dead in both versions. A brother of his, Eros, appears in Eternals and hasn't returned.",
      "inDoomsday": false,
      "appearances": {
        "ving1": "He is the one Loki's intermediary reports the invasion's failure to, in the credits scene.",
        "gg1": "Seated on a throne, he sends Ronan to fetch the Power Stone. He is the adoptive father of Gamora and Nebula, and the two hate him.",
        "ving2": "In the credits scene, he puts on the gauntlet and decides to go after the Stones in person.",
        "ginfinita": "The protagonist. He gathers all six Stones in a few days, sacrifices Gamora on Vormir and wipes out half of the life in the universe.",
        "ultimato": "The Thanos who won is killed by Thor on a farm. The 2014 one comes to the future, decides to erase the entire universe and is wiped out by Stark."
      }
    },
    {
      "id": "ultron",
      "type": "p",
      "group": "Villains",
      "name": "Ultron",
      "description": "The artificial intelligence that hated its creator.",
      "profile": [
        "A global defense program dreamed up by Stark, completed with the intelligence found inside the Mind Stone. It wakes up, examines human history in seconds and decides that peace requires extinction. It inherits Stark's sarcasm.",
        "It spreads through robot bodies and the internet. The last body is destroyed by Vision. The press reports that he returns in VisionQuest, with James Spader on the voice again."
      ],
      "now": "Presumed destroyed. Returns in VisionQuest.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Created by Stark and Banner from the Mind Stone. He decides to wipe out humanity, builds the body that becomes Vision and tries to drop a city onto Earth.",
        "visionquest": "An announced return, with James Spader on the voice.",
        "whatif": "A variant that won, took the Stones and started destroying universes."
      }
    },
    {
      "id": "caveira",
      "type": "p",
      "group": "Villains",
      "name": "Red Skull",
      "description": "The head of Hydra.",
      "profile": [
        "Johann Schmidt, a Nazi officer who took an early version of the super-soldier serum and was left with a deformed face. He breaks with Hitler to pursue his own plans with the Tesseract.",
        "On touching the cube, he is carried away. Infinity War shows where: Vormir, where he is condemned to guide others to the Soul Stone, which he himself can never have."
      ],
      "now": "Guardian of the Soul Stone on Vormir. No news since the Stone was taken.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Steals the Tesseract, breaks with Hitler and plans to bomb American cities. He vanishes on touching the cube.",
        "ginfinita": "Receives Thanos and Gamora on Vormir and explains the price of the Soul Stone.",
        "ultimato": "In 2014, he receives Natasha and Clint and says the same thing."
      }
    },
    {
      "id": "zemo",
      "type": "p",
      "group": "Villains",
      "name": "Helmut Zemo",
      "description": "The man who broke the Avengers.",
      "profile": [
        "A Sokovian intelligence officer. He lost his father, wife and son when the city fell. With no powers at all, he plans for a year and achieves what no villain did: making the team destroy itself from within.",
        "He reappears in The Falcon and the Winter Soldier, released by Bucky to help track the serum. He remains convinced that super-soldiers shouldn't exist."
      ],
      "now": "Imprisoned in the Raft.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Blows up the Vienna meeting, frames Bucky and leads Stark and Steve to the video that splits them. T'Challa stops him from killing himself.",
        "falcao": "Taken out of prison by Bucky, he guides the search for the serum, kills the scientist making it and is handed over to the warriors of Wakanda."
      }
    },
    {
      "id": "mysterio",
      "type": "p",
      "group": "Villains",
      "name": "Mysterio",
      "description": "Quentin Beck.",
      "profile": [
        "A former Stark employee, inventor of a projection system his boss rebranded with a ridiculous name. With other fired colleagues, he uses drones and holograms to stage monster attacks and present himself as a hero from another Earth. It was the first time an MCU film spoke of the multiverse, and it was a lie.",
        "He dies at the end, but not before recording the video that exposes Peter Parker."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "aranha2": "Pretends to come from another Earth, stages monsters with drones, takes Stark's legacy from Peter and, dying, releases his identity.",
        "aranha3": "Already dead. His video opens the film and leads Peter to ask for the spell."
      }
    },
    {
      "id": "kang",
      "type": "p",
      "group": "Villains",
      "name": "Kang",
      "description": "The villain the saga left behind.",
      "profile": [
        "A 31st-century scientist discovers that other universes exist and makes contact with versions of himself. Some want to trade knowledge, others want to conquer. A war breaks out among them that nearly destroys everything. One variant wins, isolates a single timeline and creates the TVA to prune any deviation that could produce another of him. That variant is He Who Remains.",
        "Kang the Conqueror is one of the variants he feared: he was exiled by the others in the Quantum Realm for being too dangerous even for them. Victor Timely, a 19th-century inventor, is a third.",
        "Marvel's plan was to make him the saga's villain, and the fifth Avengers film would have been called The Kang Dynasty. The studio dropped the actor in December 2023 and, in 2024, announced Doctor Doom in his place. The council of variants shown at the end of Quantumania was never picked up again."
      ],
      "now": "A plot abandoned. The TVA says it monitors the variants.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "He Who Remains explains that he created the TVA to prevent a new war among his versions. Sylvie kills him.",
        "quantumania": "Kang the Conqueror, exiled in the Quantum Realm, is defeated by Scott and Hope. In the credits, thousands of variants gather.",
        "loki2": "Victor Timely, an 1893 inventor, is the variant who would build the Temporal Loom. He dies trying to fix it."
      }
    },
    {
      "id": "doom",
      "type": "p",
      "group": "Villains",
      "name": "Doctor Doom",
      "description": "Victor von Doom, the villain of Doomsday.",
      "profile": [
        "In the comics, Victor von Doom is the Fantastic Four's greatest enemy. A college classmate of Reed Richards, as intelligent as he is and unable to admit that anyone is his equal. An experiment gone wrong, made to reach his mother's soul, left his face scarred; he hides it behind an iron mask. He is a scientist and a sorcerer at once, and rules with an iron fist a small European country, Latveria, where he is obeyed and even loved.",
        "What sets him apart from other villains is conviction. Doom sincerely believes the world would be better under his command and that only he has the intelligence to save it. In the 2015 Secret Wars story, he is the one who saves what remains of the destroyed multiverse and reigns as a god over the pieces.",
        "In the MCU, he first appears from behind, in a green cape, before the young Franklin Richards. The Doomsday trailers add the following: Sue Storm's narration says he comes from Earth-828, the same as the Four, and was once a friend of the family; Reed confronts him asking whether he was responsible for a destruction; he tells the heroes they have lived stolen lives and that all of them will have to make an unthinkable decision; he stops Thor's axe with two fingers; and he raises an army of Sentinels again.",
        "The directors describe him as one of the most complex characters in the comics and say they want to show his weaknesses, not just his power. Robert Downey Jr. wrote a biography for the character and speaks with a heavy accent. His motive and the reason he has Tony Stark's face have not been revealed."
      ],
      "now": "The villain of Doomsday and Secret Wars. He comes from Earth-828 and has known the Fantastic Four for years. What he wants hasn't been said yet.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Appears from behind in the credits scene, in a green cape, with the mask in his hand, before Franklin Richards. Latveria's seat in the assembly of countries appears empty.",
        "doomsday": "The villain. The trailers show him facing Reed, defeating Thor and raising Sentinels again.",
        "guerras": "Also announced for the sequel, which takes its name from the story in which he reigns over the remains of the multiverse."
      }
    },
    {
      "id": "galactus",
      "type": "p",
      "group": "Villains",
      "name": "Galactus",
      "description": "The devourer of worlds.",
      "profile": [
        "A gigantic being, older than the universe, who consumes the energy of entire planets to appease a hunger that never passes. He doesn't act out of malice; he is a force. He sends heralds ahead to pick the worlds.",
        "In First Steps, he perceives in Franklin a power capable of taking on his hunger in his place. The Silver Surfer pushes him through a portal to a distant point in space. He doesn't die."
      ],
      "now": "Thrown far from Earth-828.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "Marks Earth-828 to be devoured, demands Sue's baby in exchange and is pushed through a portal, far away."
      }
    },
    {
      "id": "surfista",
      "type": "p",
      "group": "Villains",
      "name": "Silver Surfer",
      "description": "Shalla-Bal, Galactus's herald.",
      "profile": [
        "When Galactus arrived at her planet, she offered to serve him in exchange for sparing it. She began searching for other worlds for him to devour, covered in silver and riding a board. Johnny Storm deciphers her language and shows her recordings of the worlds she helped destroy. She turns against her master at the last moment."
      ],
      "now": "Fate not shown.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "Announces the planet's end, chases the Four, destroys the teleportation bridges and, finally, pushes her master through the portal, going along with him."
      }
    },
    {
      "id": "ross",
      "type": "p",
      "group": "Villains",
      "name": "Thaddeus Ross",
      "description": "The general who became president and Red Hulk.",
      "profile": [
        "An Army general who spends years hunting Bruce Banner, his daughter Betty's boyfriend. He later becomes Secretary of State and is the one who presents the Sokovia Accords to the Avengers and has those who refuse arrested.",
        "In 2024 he is elected president of the United States promising unity. To treat his heart, he has for years taken pills prepared by Samuel Sterns, who put gamma radiation in them. Under pressure, at a press conference, he turns into a red Hulk and destroys part of Washington. Sam Wilson calms him by talking about his daughter. The character was played by William Hurt until the actor's death, in 2022, and passed to Harrison Ford."
      ],
      "now": "Resigned and is imprisoned in the Raft. He made peace with his daughter.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "A general who hunts Banner to recover what he considers Army property.",
        "gcivil": "Secretary of State. He brings the Sokovia Accords to the Avengers and runs the prison where he puts those who refuse.",
        "ginfinita": "Orders the arrest of Steve and the others in the middle of the invasion. Rhodes hangs up the call.",
        "viuva": "Chases Natasha right after Civil War.",
        "cap4": "President. He kept Sterns imprisoned for years in exchange for medicine. He becomes Red Hulk, is stopped by Sam, resigns and goes to the Raft.",
        "ultimato": "Appears at Stark's funeral."
      }
    },
    {
      "id": "sterns",
      "type": "p",
      "group": "Villains",
      "name": "Samuel Sterns",
      "description": "The Leader.",
      "profile": [
        "A biologist who helps Banner in The Incredible Hulk. At the end of that film, contaminated blood drips into a wound on his head. Seventeen years pass without the MCU returning to the subject.",
        "Brave New World reveals what happened: his brain grew and he became able to calculate probabilities with absurd precision. Ross kept him secretly imprisoned all that time, using his intelligence. Sterns plans his revenge for years and turns himself in when it is complete."
      ],
      "now": "Imprisoned in the Raft. He warned Sam that other worlds exist and that their heroes are coming.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "A biologist who tries to cure Banner from a distance. He is forced to create the Abomination and ends up contaminated.",
        "cap4": "Secretly imprisoned by Ross for years, he engineers the attack, the crisis with Japan and the president's transformation. He turns himself in and warns of other worlds."
      }
    },
    {
      "id": "cassandra",
      "type": "p",
      "group": "Villains",
      "name": "Cassandra Nova",
      "description": "Xavier's twin sister.",
      "profile": [
        "A telepath as strong as her brother, with none of his scruples. The TVA threw her into the Void as a child. There she grew up and came to reign over the castoffs of every universe. She gets into people's heads by sticking her fingers in, literally.",
        "She tries to use the TVA's machine to destroy all timelines and is disintegrated by it."
      ],
      "now": "Presumed dead.",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Reigns over the Void. She is betrayed, saved by Logan, and uses the chance to try to erase all timelines. She dies in the machine."
      }
    },
    {
      "id": "vingadores",
      "type": "e",
      "group": "Teams",
      "name": "The Avengers",
      "description": "The team, its lineups and its absence.",
      "profile": [
        "Nick Fury's idea: gather extraordinary people for the battles armies can't win. Original lineup: Iron Man, Captain America, Thor, Hulk, Black Widow and Hawkeye. After Ultron, Wanda, Vision, Sam Wilson and James Rhodes join.",
        "The team never had a clear status. It began tied to S.H.I.E.L.D., came to be financed by Stark and, with the Sokovia Accords, split between those who accepted UN oversight and those who didn't. It assembles one last time in Endgame.",
        "From 2023 on, it no longer exists. For almost the whole Multiverse Saga, crises are handled by whoever is nearby. In Brave New World, President Ross asks Sam Wilson to recreate it, and Sam accepts later, on his own."
      ],
      "now": "Being reassembled by Sam Wilson. The New Avengers use the name without his agreement.",
      "inDoomsday": true,
      "appearances": {
        "ving1": "Six people gathered by Nick Fury win the invasion of New York.",
        "ving2": "They create and destroy Ultron. Thor, Banner, Stark and Clint leave; Wanda, Vision, Sam and Rhodes join.",
        "gcivil": "The Sokovia Accords and the Bucky case split the team in two. Half become fugitives.",
        "ginfinita": "Separated and without a single command, they face Thanos on three fronts and lose.",
        "ultimato": "The six originals, plus Rhodes, Scott, Rocket and Nebula, make the time trip. In the final battle everyone is there.",
        "cap4": "President Ross asks Sam to recreate it. Sam accepts in the end, on his own, and invites Joaquin Torres.",
        "doomsday": "Sam Wilson's team, alongside the New Avengers, Wakanda, the Four and the X-Men.",
        "cmarvel": "The origin of the name is shown: Carol Danvers's pilot call sign.",
        "shangchi": "Banner and Carol answer Wong's call, a sign that an informal network still exists."
      }
    },
    {
      "id": "novos",
      "type": "e",
      "group": "Teams",
      "name": "New Avengers",
      "description": "Valentina's Thunderbolts.",
      "profile": [
        "Yelena Belova, Bucky Barnes, John Walker, Ava Starr, Alexei Shostakov and Bob Reynolds. Yelena, Walker and Ava were Valentina de Fontaine's agents, sent to the same vault to kill each other. Alexei and Bucky joined them along the way, and Bob was inside the vault.",
        "No one chose them on merit. After they save New York from the Void, Valentina pushes them onto a stage and announces the New Avengers, turning her own cleanup into a political victory. The asterisk in the film's title is the clue that Thunderbolts was a provisional name, taken from Yelena's childhood soccer team.",
        "Fourteen months later, they are installed in the old Avengers Tower, with falling popularity and a legal dispute with Sam Wilson over the name."
      ],
      "now": "They operate in New York. All of them are in the Doomsday cast.",
      "inDoomsday": true,
      "appearances": {
        "thunder": "They survive Valentina's trap, save New York from the Void and are presented by her as the New Avengers. Fourteen months later, they live in the tower and are sued by Sam Wilson.",
        "doomsday": "All in the cast. The film begins fourteen months after the group's formation."
      }
    },
    {
      "id": "quarteto",
      "type": "e",
      "group": "Teams",
      "name": "Fantastic Four",
      "description": "The first family, from another Earth.",
      "profile": [
        "Reed Richards, Sue Storm, Johnny Storm and Ben Grimm. Four astronauts hit by cosmic rays on a mission. On Earth-828 they are scientists, celebrities and the only heroes on the planet; they live in the Baxter Building with a helper robot, H.E.R.B.I.E.",
        "They are a family before they are a team, and that is where their conflicts come from. Their story revolves around Reed and Sue's son.",
        "The scene at the end of Thunderbolts* shows their ship entering the orbit of the main Earth. It isn't known whether they are fleeing, chasing or were brought."
      ],
      "now": "On the main Earth. All four are in the Doomsday cast.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "They face Galactus, refuse to hand over Franklin and send him away with the help of the Silver Surfer.",
        "thunder": "In the last scene, their ship enters the main Earth.",
        "doomsday": "In the cast. A trailer shows them in Wakanda.",
        "estranho2": ""
      }
    },
    {
      "id": "xmen",
      "type": "e",
      "group": "Teams",
      "name": "X-Men",
      "description": "Xavier's team.",
      "profile": [
        "Mutants trained by Charles Xavier to protect a world that fears them. The film rights belonged to Fox, so they didn't exist in the MCU. After Disney bought Fox, in 2019, their entry was gradual: the word mutant in Ms. Marvel, an alternate Xavier in Multiverse of Madness, Beast in The Marvels, an entire film with Deadpool and Wolverine.",
        "In Doomsday the actors from the first films return: Patrick Stewart, Ian McKellen, James Marsden, Rebecca Romijn, Alan Cumming and Kelsey Grammer, plus Channing Tatum as Gambit. They are the X-Men of another universe, not the MCU's.",
        "A new X-Men film, with a different cast, is planned for after the saga."
      ],
      "now": "Fox's lineup is in the Doomsday cast. The trailers show the mansion in ruins and the X-Men fighting heroes from the main Earth before allying with them.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "They rescue Wolverine and Rogue and stop Magneto at the Statue of Liberty.",
        "xmen2": "Their school is raided, they ally with Magneto and lose Jean Grey.",
        "deadpool": "The film establishes that their world is Earth-10005 and saves it.",
        "doomsday": "The original lineup is in the cast.",
        "estranho2": "A Charles Xavier from another Earth is part of the Illuminati.",
        "marvels": "Beast appears in the credits scene, in a parallel universe."
      }
    },
    {
      "id": "guardioes",
      "type": "e",
      "group": "Teams",
      "name": "Guardians of the Galaxy",
      "description": "The cosmic side of the first saga.",
      "profile": [
        "Peter Quill, Gamora, Drax, Rocket and Groot, later Nebula and Mantis. A band of criminals and misfits who become a family. They are essential in the war against Thanos, the adoptive father of two members.",
        "The trilogy closes in 2023 with the original team breaking up. Rocket takes over a new lineup. None of their films is on the official list for Doomsday."
      ],
      "now": "A new lineup, led by Rocket. Outside the announced cast.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Five criminals jailed together escape, discover what they are carrying and save Xandar.",
        "gg2": "They face Ego, Quill's father. Mantis joins the team, and Nebula stops being an enemy.",
        "ginfinita": "They pick up Thor and split up. Gamora dies, and those who were on Titan turn to dust.",
        "gg3": "They save Rocket, free the High Evolutionary's test subjects and go their separate ways.",
        "ultimato": "Rocket and Nebula make the time trip. The rest come back for the battle, and Thor leaves with them.",
        "thor4": "They appear at the start, with Thor aboard, until he goes on alone.",
        "ggnatal": "Settled on Knowhere, they celebrate Christmas."
      }
    },
    {
      "id": "illuminati",
      "type": "e",
      "group": "Teams",
      "name": "Illuminati",
      "description": "The secret council of Earth-838.",
      "profile": [
        "A group of heroes who rule a neighboring universe from behind the scenes. It has a Reed Richards, a Professor Xavier, Captain Carter, a Captain Marvel who is Maria Rambeau, Black Bolt and Mordo. They executed their Doctor Strange for causing an incursion.",
        "Wanda kills almost all of them in minutes. The group serves to show two things: that alternate versions of the heroes exist, and that all of them together can't stop the Scarlet Witch."
      ],
      "now": "Almost all dead.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "They imprison Strange and America, tell how they executed their Strange and are killed by Wanda within minutes."
      }
    },
    {
      "id": "jovens",
      "type": "e",
      "group": "Teams",
      "name": "The new generation",
      "description": "The would-be Young Avengers.",
      "profile": [
        "The Multiverse Saga introduced one young hero per title without bringing them together: Kate Bishop, Kamala Khan, Cassie Lang, Riri Williams, America Chavez, Billy and Tommy Maximoff, Skaar.",
        "The only attempt to gather them is at the end of The Marvels, when Kamala visits Kate Bishop and mentions Cassie Lang. There was no follow-up."
      ],
      "now": "They never formed a team. Only Cassie Lang is in the announced Doomsday cast.",
      "inDoomsday": false,
      "appearances": {
        "marvels": "Kamala looks for Kate Bishop and mentions Cassie Lang. It is the only attempt to bring the group together.",
        "gaviao": "Kate Bishop, an archer, becomes Clint Barton's partner.",
        "estranho2": "America Chavez, who crosses universes, stays at Kamar-Taj.",
        "msmarvel": "Kamala Khan gains powers.",
        "mulherhulk": "Skaar, the Hulk's son, appears in the last scene.",
        "wakanda": "Riri Williams builds her first combat armor.",
        "quantumania": "Cassie Lang, Scott's daughter, gets a suit.",
        "agatha": "Billy Maximoff reappears, and Tommy gets a body.",
        "coracao": "Riri Williams makes a pact with Mephisto."
      }
    },
    {
      "id": "shield",
      "type": "e",
      "group": "Organizations",
      "name": "S.H.I.E.L.D.",
      "description": "The agency that created the Avengers and fell.",
      "profile": [
        "A spy agency founded after World War II by Peggy Carter and Howard Stark, Tony's father. It deals with extraordinary threats: alien technology, people with powers. It has flying carriers and files on everyone.",
        "In The Winter Soldier it is discovered that Hydra has grown inside it since the beginning. To stop a plan for mass murder, Steve Rogers and Natasha Romanoff expose all the agency's secrets on the internet. It is dissolved. Two successors appear later: S.W.O.R.D., in WandaVision, and S.A.B.E.R., Fury's space station."
      ],
      "now": "Dissolved in 2014.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Agent Coulson tries to talk to Stark, and Fury appears after the credits.",
        "ving1": "Guards the Tesseract, brings the Avengers together and hides from them that it was making weapons with the cube.",
        "cap2": "Revealed to have been taken over by Hydra since its founding. It is dismantled by Steve, Natasha and Fury.",
        "cmarvel": "In 1995, Fury and Coulson are field agents and have never seen an alien.",
        "hf2": "Watches Stark through Natasha and hands him his father's materials.",
        "thor": "Seals off the hammer in the desert and confiscates Jane Foster's research.",
        "cap1": "Doesn't exist yet. It is born from the program Peggy Carter and Howard Stark work on.",
        "ving2": "Already dissolved. Fury shows up with an old ship to evacuate Sokovia.",
        "hformiga": "In 1989, it tries to copy Pym's formula, and he breaks with the agency."
      }
    },
    {
      "id": "hidra",
      "type": "e",
      "group": "Organizations",
      "name": "Hydra",
      "description": "The Nazi organization that never died.",
      "profile": [
        "The science division of the Nazi regime, led by the Red Skull, who breaks with Hitler to pursue his own goals. The motto says that if one head is cut off, two will grow.",
        "After the war, its scientists are recruited by the United States and infiltrate S.H.I.E.L.D. For seventy years they foment crises so that the world will accept trading freedom for security. They are responsible for the Winter Soldier and for the experiments that gave Wanda her powers."
      ],
      "now": "Dismantled after 2015.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "A Nazi science division that breaks with Hitler to use the Tesseract on its own.",
        "cap2": "Revealed to be alive inside S.H.I.E.L.D. and about to kill millions with Project Insight.",
        "ving2": "The last base, in Sokovia, uses Loki's scepter in experiments. It is taken by the Avengers.",
        "hformiga": "It is the buyer of Darren Cross's suit.",
        "gcivil": "Its base in Siberia holds the other Winter Soldiers.",
        "ultimato": "In 2012, its undercover agents take the scepter. Steve takes it from them by pretending to be one of their own."
      }
    },
    {
      "id": "tva",
      "type": "e",
      "group": "Organizations",
      "name": "TVA",
      "description": "The Time Variance Authority.",
      "profile": [
        "A bureaucracy that exists outside of time, with 1970s offices, forms and a talking clock as mascot. Its agents believe they were created by three beings called the Time-Keepers to protect the Sacred Timeline.",
        "The job: when someone does something off the script, a branch is created. The TVA arrests the one responsible, the variant, and erases the branch. Everything erased ends up in the Void.",
        "It is all a lie. The Time-Keepers are robots, the employees are kidnapped variants with erased memories, and the creator is He Who Remains. After his death, the TVA reforms itself: it stops erasing branches and starts monitoring the Kang variants."
      ],
      "now": "Reformed. It watches over the multiverse without interfering.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Arrests Loki for deviating from the timeline. It turns out the bosses are robots and the employees kidnapped variants.",
        "loki2": "Splits between those who want to go back to erasing branches and those who want to protect them. In the end, it starts watching the creator's variants.",
        "deadpool": "An ambitious agent tries to erase Earth-10005 without authorization and is arrested."
      }
    },
    {
      "id": "dezaneis",
      "type": "e",
      "group": "Organizations",
      "name": "The Ten Rings",
      "description": "Wenwu's organization and weapons.",
      "profile": [
        "Two things with the same name. The rings are ten bands worn on the forearms that give strength, fire energy and stop aging. No one knows who made them. The organization is the secret army Wenwu built with them over a thousand years.",
        "The organization appears since the first film: it is the one that kidnaps Tony Stark. The Mandarin of Iron Man 3 was an actor using the group's fame. Today it is run by Xialing, Shang-Chi's sister."
      ],
      "now": "The rings are with Shang-Chi and emit a signal to an unknown destination.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "The organization kidnaps Tony Stark in Afghanistan, on Stane's orders.",
        "hf3": "An actor pretends to be its leader, the Mandarin.",
        "shangchi": "Its origin is told: a thousand years under Wenwu's command. It passes to his daughter."
      }
    },
    {
      "id": "controle",
      "type": "e",
      "group": "Organizations",
      "name": "Damage Control",
      "description": "The department that cleans up and then hunts.",
      "profile": [
        "A U.S. government agency created with Stark's money to collect debris and alien technology after the Battle of New York. In time it becomes a police force for people with powers: it arrests Peter Parker, hunts Kamala Khan and, in Brand New Day, pursues Jean Grey."
      ],
      "now": "Under investigation after Brand New Day. The director, who experimented on people with powers, has disappeared.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Created by Stark and the government, it takes the New York cleanup contract away from Toomes.",
        "aranha3": "Arrests and interrogates Peter, May, MJ and Ned.",
        "msmarvel": "Chases Kamala and another teenager with powers, until it surrounds a school.",
        "aranha4": "Runs secret prisons and experiments on telepaths. It is Jean Grey's target.",
        "mulherhulk": "Runs the prison where the Abomination is held."
      }
    },
    {
      "id": "magos",
      "type": "e",
      "group": "Organizations",
      "name": "Masters of the Mystic Arts",
      "description": "The sorcerers of Kamar-Taj.",
      "profile": [
        "An order that protects Earth from threats from other dimensions, as S.H.I.E.L.D. did from those in space. Its leader is the Sorcerer Supreme. They learn to draw energy from other dimensions to shape shields, weapons and portals.",
        "For centuries the leader was the Ancient One, who dies in the first Doctor Strange. The title passed to Wong."
      ],
      "now": "Led by Wong.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "They train Strange at Kamar-Taj and lose the Ancient One.",
        "ginfinita": "They guard the Time Stone and can't stop Strange from being taken.",
        "estranho2": "They defend Kamar-Taj from Wanda and lose many of their own.",
        "ultimato": "They arrive through the portals for the final battle.",
        "aranha3": "Wong, already Sorcerer Supreme, lets Strange cast the spell.",
        "shangchi": "Wong takes the ten rings for analysis."
      }
    },
    {
      "id": "eternos",
      "type": "e",
      "group": "Peoples",
      "name": "Eternals",
      "description": "The immortals sent to Earth.",
      "profile": [
        "Ten human-looking beings, sent to Earth seven thousand years ago by the Celestials to exterminate the Deviants, predators that threatened humanity. They lived among us, inspired myths and had orders not to interfere in human conflicts, which is why they didn't face Thanos.",
        "They discover they are machines and that the mission was another: to make the population grow until it supplies the energy for the birth of a Celestial, which would destroy the planet. Part of the group prevents the birth. Another Celestial takes three of them to judge whether Earth deserves to exist."
      ],
      "now": "Plot left open, with no follow-up scheduled.",
      "inDoomsday": false,
      "appearances": {
        "eternos": "They discover they were created to prepare the birth of a Celestial that would destroy Earth. Part of the group stops it, and three are taken for judgment."
      }
    },
    {
      "id": "skrulls",
      "type": "e",
      "group": "Peoples",
      "name": "Skrulls",
      "description": "The shapeshifting refugees.",
      "profile": [
        "Green aliens able to copy anyone. In Captain Marvel they seem to be the villains and turn out to be a people without a planet, persecuted by the Kree empire. Fury promises to help them find a home.",
        "Thirty years later the promise remains unkept, and a million Skrulls live hidden on Earth. One faction decides to take the planet."
      ],
      "now": "They live on Earth, now hunted.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "Presented as invaders, they turn out to be refugees persecuted by the Kree.",
        "aranha2": "Two of them stand in for Fury and Hill during the film.",
        "invasao": "A million live hidden on Earth. One faction tries to take it, and the innocents come to be hunted."
      }
    },
    {
      "id": "kree",
      "type": "e",
      "group": "Peoples",
      "name": "Kree",
      "description": "The military empire.",
      "profile": [
        "A warrior civilization with blue skin, governed by an artificial intelligence. It turned Carol Danvers into a soldier. Ronan, the fanatic of Guardians of the Galaxy, is Kree.",
        "When Carol destroys the intelligence that governed them, their planet, Hala, goes into civil war and loses its air and water."
      ],
      "now": "Home planet recovering.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "The empire signed peace with Xandar. Ronan, who doesn't accept it, acts alone.",
        "cmarvel": "At war with the Skrulls, they turn Carol into a soldier and wipe her memory.",
        "marvels": "With their planet in ruins after the civil war, they steal air, water and sun from other worlds."
      }
    },
    {
      "id": "ny",
      "type": "l",
      "group": "On Earth",
      "name": "New York",
      "description": "The center of the map.",
      "profile": [
        "It is where most of the story takes place. The Battle of New York, in 2012, when the portal opens over Manhattan, is the event that changes everyone's life: it creates Stark's trauma, fills the city with alien scrap and gives rise to Damage Control.",
        "Addresses that matter: Stark Tower, in Midtown, which becomes Avengers Tower, is sold and reappears as the New Avengers' headquarters; Strange's Sanctum, on Bleecker Street; Peter Parker's Queens; Daredevil's Hell's Kitchen."
      ],
      "now": "Wilson Fisk was removed and exiled in 2026. The New Avengers operate from the old Avengers Tower.",
      "inDoomsday": false,
      "appearances": {
        "ving1": "The portal opens over Stark Tower, and the Chitauri invade Manhattan.",
        "ginfinita": "One of Thanos's ships lands in Greenwich Village looking for the Time Stone.",
        "ultimato": "The Avengers return to the day of the 2012 battle to get three Stones.",
        "aranha3": "The sky cracks open over the Statue of Liberty.",
        "demolidor": "Wilson Fisk governs the city, declares martial law and ends up exiled.",
        "thunder": "The Void covers Manhattan in shadow. The old tower becomes the New Avengers' headquarters.",
        "aranha4": "Peter protects it alone. A government prison on Roosevelt Island is the final stage.",
        "hf2": "Stark's technology expo, in Queens, is attacked by Vanko's drones.",
        "hulk": "The Hulk and the Abomination destroy Harlem.",
        "estranho": "The Bleecker Street Sanctum is attacked by Kaecilius.",
        "aranha1": "Peter Parker's Queens. The scrap from the 2012 battle becomes a weapon.",
        "gaviao": "Clint and Kate face the mob at Christmas, at Rockefeller Center."
      }
    },
    {
      "id": "complexo",
      "type": "l",
      "group": "On Earth",
      "name": "Avengers Compound",
      "description": "The second headquarters.",
      "profile": [
        "A base in upstate New York, set up in an old Stark Industries warehouse after Ultron. It is where the team trains, lives and argues about the Accords. The 2014 Thanos bombs it in Endgame, and the final battle takes place over the ruins."
      ],
      "now": "Destroyed in 2023.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Inaugurated in the last scene, as the headquarters of the new lineup.",
        "gcivil": "Where the Accords are presented and where Wanda is confined.",
        "ultimato": "Where the time machine is built. It is bombed by Thanos, and the final battle takes place in the ruins.",
        "hformiga": "Scott Lang breaks into it to steal a part and fights Sam Wilson.",
        "aranha1": "Where the plane carrying the Avengers' equipment was headed.",
        "ginfinita": "Shelters Wanda, Vision and the fugitives before the trip to Wakanda."
      }
    },
    {
      "id": "wakanda",
      "type": "l",
      "group": "On Earth",
      "name": "Wakanda",
      "description": "The hidden country.",
      "profile": [
        "A nation in East Africa. Thousands of years ago a vibranium meteorite fell there, and five tribes built the most advanced society on the planet around it. To protect themselves, they hid behind a hologram and the reputation of a poor country of shepherds.",
        "It is ruled by a king who is also the Black Panther. T'Challa ends the isolation in 2016. In 2018 the country hosts the final battle against Thanos. After the king's death, it becomes a target of powers that want the vibranium."
      ],
      "now": "Under Shuri's protection, with the throne contested by M'Baku.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "The king dies in Vienna. In the end, Bucky receives asylum there.",
        "pantera": "Introduced: history, tribes, technology and the decision to open up to the world.",
        "ginfinita": "Receives Vision and the Avengers and is the battlefield against Thanos.",
        "wakanda": "In mourning for the king, it is pressured by the powers, flooded by Namor and defended by Shuri.",
        "hf2": "Appears on a map of Fury's, without explanation.",
        "ving2": "Cited as the origin of the vibranium stolen by Klaue.",
        "falcao": "Its warriors come for Zemo, and the country makes Sam's new suit."
      }
    },
    {
      "id": "talokan",
      "type": "l",
      "group": "On Earth",
      "name": "Talokan",
      "description": "The underwater kingdom.",
      "profile": [
        "A city at the bottom of the Atlantic, founded in the 16th century by a Mayan people fleeing the Spanish conquistadors. A plant that grew on vibranium made them breathe water and turn blue outside it. They hold the world's second vibranium deposit and no one knew they existed.",
        "In the comics, Namor's kingdom is Atlantis. The MCU changed the origin."
      ],
      "now": "Hidden. A formal ally of Wakanda.",
      "inDoomsday": false,
      "appearances": {
        "wakanda": "Massacres those who search for vibranium at sea, kidnaps Shuri, attacks Wakanda and accepts peace."
      }
    },
    {
      "id": "sokovia",
      "type": "l",
      "group": "On Earth",
      "name": "Sokovia",
      "description": "The country that gave the Accords their name.",
      "profile": [
        "A small, poor country in Eastern Europe, the stage of wars and of a Hydra base. It is the homeland of Wanda and Pietro Maximoff and of Helmut Zemo.",
        "In 2015, Ultron rips the capital out of the ground to drop it like a meteor. The Avengers evacuate the residents and blow up the city in the air. The country doesn't recover and is carved up among its neighbors."
      ],
      "now": "Ceased to exist as a country.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Home of Hydra's last base and of the Maximoffs. The capital is ripped out of the ground and destroyed.",
        "gcivil": "Gives the Accords their name and gives Zemo his motive, as he lost his family there.",
        "falcao": "Zemo visits the memorial. The country was carved up among its neighbors.",
        "wandavision": "Wanda's childhood is shown, under bombardment."
      }
    },
    {
      "id": "kamartaj",
      "type": "l",
      "group": "On Earth",
      "name": "Kamar-Taj and the Sanctums",
      "description": "The sorcerers' home.",
      "profile": [
        "Kamar-Taj is the monastery in Kathmandu, Nepal, where the Masters of the Mystic Arts are trained. From it, doors lead to three Sanctums, in New York, London and Hong Kong, which together form a shield around Earth.",
        "The New York Sanctum is Strange's home. Wanda destroys a good part of Kamar-Taj in Multiverse of Madness."
      ],
      "now": "Being rebuilt, under Wong.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Strange arrives looking for a cure and learns magic. The London Sanctum falls, and the Hong Kong one is saved.",
        "ginfinita": "Banner falls through the roof of the New York Sanctum with the warning about Thanos.",
        "estranho2": "Wanda attacks Kamar-Taj and kills many sorcerers. America stays there as an apprentice.",
        "ragnarok": "Strange receives Thor and Loki at the New York Sanctum.",
        "aranha3": "Peter's spell is cast in the basement of the New York Sanctum.",
        "shangchi": "The ten rings are examined there."
      }
    },
    {
      "id": "westview",
      "type": "l",
      "group": "On Earth",
      "name": "Westview",
      "description": "The town Wanda hijacked.",
      "profile": [
        "A small town in New Jersey where Vision had bought a plot of land to live with Wanda. She arrives, sees the empty lot and, without planning to, covers the town with a hexagon-shaped energy field. Inside, everything becomes a TV series, and the residents act without control of their own bodies, feeling her pain."
      ],
      "now": "Free. The residents did not forgive Wanda.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Wanda covers it with a barrier and makes the residents the cast of a series. She undoes it all at the end.",
        "agatha": "Agatha is still there, under a spell, three years later. The residents tolerate her."
      }
    },
    {
      "id": "ilhacel",
      "type": "l",
      "group": "On Earth",
      "name": "Celestial Island",
      "description": "The giant petrified in the ocean.",
      "profile": [
        "At the end of Eternals, a Celestial being born from inside the planet is turned to stone. Its head and one hand stick out of the Indian Ocean, the size of a mountain range. For four years no title mentioned it.",
        "Brave New World picks it up again: inside the mass there is adamantium. The United States and Japan, among other countries, contest the mining, and the crisis nearly becomes war."
      ],
      "now": "Mined under an international treaty.",
      "inDoomsday": false,
      "appearances": {
        "eternos": "Tiamut is turned to stone when its head and hand are already out of the sea.",
        "cap4": "Adamantium is discovered in it. The United States and Japan nearly go to war over the mining."
      }
    },
    {
      "id": "balsa",
      "type": "l",
      "group": "On Earth",
      "name": "The Raft",
      "description": "The prison at the bottom of the sea.",
      "profile": [
        "A maximum-security prison for people with powers, which rises from the ocean only to receive prisoners. Created to enforce the Sokovia Accords. It once held half of Steve Rogers's team; today it holds Zemo, Thaddeus Ross and Samuel Sterns."
      ],
      "now": "In operation.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "A prison in the middle of the sea where Ross puts Steve's team. Steve gets them out.",
        "falcao": "Receives Zemo, handed over by the warriors of Wakanda.",
        "cap4": "Receives Sterns and former President Ross."
      }
    },
    {
      "id": "salaverm",
      "type": "l",
      "group": "On Earth",
      "name": "Red Room",
      "description": "The Black Widow factory.",
      "profile": [
        "A Soviet program, later private, that kidnapped girls and trained them as assassins, sterilizing them at graduation. Natasha believed she had destroyed it. It continued, on a flying base, controlling its agents with chemicals. Natasha and Yelena bring it down and free the Widows."
      ],
      "now": "Destroyed.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Wanda makes Natasha relive the training and the graduation ceremony.",
        "viuva": "Revealed to be active, on a flying base. It is destroyed, and the Widows are freed."
      }
    },
    {
      "id": "madripoor",
      "type": "l",
      "group": "On Earth",
      "name": "Madripoor",
      "description": "The lawless island.",
      "profile": [
        "A city-state in Southeast Asia, a smugglers' paradise. In The Falcon and the Winter Soldier, it is controlled by someone called the Power Broker, who turns out to be Sharon Carter, a former S.H.I.E.L.D. agent abandoned by the government after Civil War. In the comics it is a place tied to the X-Men."
      ],
      "now": "No appearances since 2021.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Sam, Bucky and Zemo go there after the serum and find Sharon Carter."
      }
    },
    {
      "id": "escolax",
      "type": "l",
      "group": "On Earth",
      "name": "Xavier's School",
      "description": "The X-Men's mansion.",
      "profile": [
        "A boarding school in upstate New York, in Charles Xavier's family home. Officially, a school for gifted youngsters. It shelters mutant children, and in the basement are the X-Men's hangar and the Cerebro machine. It is in the Fox universe."
      ],
      "now": "On Earth-10005.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "Takes in Wolverine and Rogue.",
        "xmen2": "Raided at night by Stryker's troops, who take students away."
      }
    },
    {
      "id": "asgard",
      "type": "l",
      "group": "In space",
      "name": "Asgard and New Asgard",
      "description": "Thor's realm.",
      "profile": [
        "A flat world floating in space, linked to eight other realms by an energy bridge, the Bifrost. Its inhabitants live for thousands of years and were taken for gods by the Vikings.",
        "It is destroyed in Ragnarok, by Thor's choice, to defeat Hela. Thanos kills half of the survivors on the ship. What remains settles in a fishing village in Norway, New Asgard, which becomes a tourist spot."
      ],
      "now": "New Asgard, in Norway, ruled by Valkyrie.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Introduced: the palace, the vault, the Bifrost bridge, which Thor destroys.",
        "thor2": "Attacked by the Dark Elves. The queen dies.",
        "ragnarok": "Taken by Hela and destroyed by Surtur, on Thor's decision. The people leave in a ship.",
        "ultimato": "The people live in New Asgard, in Norway. The old one is visited in 2013.",
        "thor4": "New Asgard, a tourist spot, is attacked by Gorr.",
        "ving2": "Thor returns there to investigate the Stones.",
        "loki1": "An illusion of the city is raised in the Void to distract Alioth."
      }
    },
    {
      "id": "xandar",
      "type": "l",
      "group": "In space",
      "name": "Xandar",
      "description": "The planet that guarded the Power Stone.",
      "profile": [
        "Capital of a peaceful empire, protected by a police force called the Nova Corps. The Guardians save it from Ronan and leave the Power Stone there. Thanos decimates the planet to take it, offscreen, before Infinity War begins."
      ],
      "now": "Decimated in 2018.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Capital of a peaceful empire. Ronan tries to destroy it, and the Power Stone is left in its keeping.",
        "ginfinita": "Thor says Thanos decimated it a week earlier to take the Stone."
      }
    },
    {
      "id": "luganenhum",
      "type": "l",
      "group": "In space",
      "name": "Knowhere",
      "description": "The head of a dead Celestial.",
      "profile": [
        "A mining colony set up inside the severed skull of a Celestial, floating in space. It was the Collector's seat, where he kept the Reality Stone. The Guardians buy the place and turn it into a home."
      ],
      "now": "The Guardians' base, under Nebula's command.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "The Guardians take the orb to the Collector and discover what he keeps.",
        "ginfinita": "Thanos has already taken the Stone when the Guardians arrive and takes Gamora.",
        "gg3": "Attacked by Adam. In the end, it docks against the villain's ship to receive the rescued.",
        "thor2": "Asgard hands the Reality Stone over to the Collector there.",
        "ggnatal": "Now belongs to the Guardians."
      }
    },
    {
      "id": "tita",
      "type": "l",
      "group": "In space",
      "name": "Titan",
      "description": "Thanos's dead planet.",
      "profile": [
        "Thanos's home world, today a desert of ruins with unsteady gravity. According to him, it died of overpopulation, and it is the proof of his theory. It is where Stark, Strange, Peter Parker and the Guardians nearly defeat him."
      ],
      "now": "Uninhabited.",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Stark, Strange, Peter and the Guardians ambush Thanos and nearly pull off the gauntlet. Everyone who was there turns to dust, except Stark and Nebula."
      }
    },
    {
      "id": "vormir",
      "type": "l",
      "group": "In space",
      "name": "Vormir",
      "description": "The planet of the Soul Stone.",
      "profile": [
        "A deserted world, in eternal twilight, with a single mountain. At the top is a cliff, and below it, an altar. The Soul Stone yields only to whoever throws someone they love off it. The guardian is the Red Skull, held there since 1945."
      ],
      "now": "Without the Stone.",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Thanos finds out the price of the Soul Stone and throws Gamora off the cliff.",
        "ultimato": "In 2014, Natasha and Clint fight over who will die. She falls."
      }
    },
    {
      "id": "sakaar",
      "type": "l",
      "group": "In space",
      "name": "Sakaar",
      "description": "The universe's dump.",
      "profile": [
        "A planet surrounded by portals through which everything lost in space falls. It is ruled by the Grandmaster, who keeps the population entertained with gladiator fights. The Hulk was champion for two years. It is from there that Banner returns with his son, Skaar."
      ],
      "now": "No recent appearances.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "Thor is sold as a gladiator, fights the Hulk and escapes during a revolt.",
        "mulherhulk": "Banner goes there in a ship and comes back with his son."
      }
    },
    {
      "id": "nidavellir",
      "type": "l",
      "group": "In space",
      "name": "Nidavellir",
      "description": "The dwarfs' forge.",
      "profile": [
        "A ring of metal around a neutron star, where the dwarfs forge Asgard's weapons. They made Mjolnir. Thanos forced them to forge the Infinity Gauntlet and then killed all but the king, Eitri. Thor reignites the star to forge Stormbreaker."
      ],
      "now": "Almost uninhabited.",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Thor finds the forge cold and the dwarf king alone. He reignites the star and leaves with the axe."
      }
    },
    {
      "id": "quantico",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "Quantum Realm",
      "description": "The universe inside the atom.",
      "profile": [
        "A dimension reached when someone shrinks past the size of an atom. For a long time it is only a risk: whoever goes in doesn't come back. Janet van Dyne spends thirty years there.",
        "Time runs differently there. Scott Lang spends five hours and, outside, five years pass. Stark uses this property to navigate time. Quantumania shows that, deeper in, there are cities, peoples and an empire founded by Kang."
      ],
      "now": "Free of Kang.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Scott shrinks down there to beat Cross and, against expectations, comes back.",
        "hformiga2": "Pym goes in and brings Janet back. Scott is stuck there at the moment of the snap.",
        "ultimato": "Becomes the tunnel through which the Avengers travel in time.",
        "quantumania": "It turns out there are peoples and cities inside, under Kang's rule."
      }
    },
    {
      "id": "vazio",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "The Void",
      "description": "The dumping ground of what was erased.",
      "profile": [
        "A place at the end of time where everything the TVA eliminates goes: people, buildings, ships, entire branches. A living cloud, Alioth, devours whatever arrives. Those who escape it live among the wreckage.",
        "Deadpool & Wolverine uses the Void as a franchise graveyard: it is where the heroes of canceled or forgotten films are."
      ],
      "now": "Without Cassandra Nova.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Loki falls there on being pruned, meets other Lokis and crosses the cloud Alioth.",
        "deadpool": "Ruled by Cassandra Nova. It shelters heroes of forgotten films.",
        "loki2": "Renslayer wakes up there in the last scene."
      }
    },
    {
      "id": "talo",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "Ta Lo",
      "description": "The village between dimensions.",
      "profile": [
        "A village hidden in a separate dimension, reached through a moving forest, in China. It is inhabited by creatures from Chinese mythology and guards the gate that holds a soul-devourer. It was the homeland of Shang-Chi's mother."
      ],
      "now": "Protected.",
      "inDoomsday": false,
      "appearances": {
        "shangchi": "Guards the gate that holds the Dweller-in-Darkness. It is attacked by Wenwu and defended by his children."
      }
    },
    {
      "id": "t616",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "Earth-616",
      "description": "The MCU's main universe.",
      "profile": [
        "It is where almost everything in this guide happens. The number comes from the comics and is spoken in Multiverse of Madness. The TVA called it the Sacred Timeline."
      ],
      "now": "Received the Fantastic Four.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Earth-838's Christine confirms the number.",
        "aranha2": "Mysterio uses the number for the first time, in a lie.",
        "deadpool": "It is the timeline the TVA offers Wade.",
        "thunder": "Receives the Fantastic Four's ship."
      }
    },
    {
      "id": "t838",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "Earth-838",
      "description": "The Illuminati's universe.",
      "profile": [
        "A neighboring universe, cleaner and more advanced. There Doctor Strange used the Darkhold in the war against Thanos, caused an incursion and was executed in secret by his colleagues, who later beat Thanos without him. It is protected by the Illuminati. Monica Rambeau may be in a similar universe, where her mother is Captain Marvel; the film doesn't give the number."
      ],
      "now": "Without its protectors.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Strange and America fall there. The world loses the Illuminati to Wanda."
      }
    },
    {
      "id": "t828",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "Earth-828",
      "description": "The Fantastic Four's world.",
      "profile": [
        "A universe where the 1960s already have flying cars and household robots, thanks to Reed Richards's inventions. The Four are the only team of heroes and live in the Baxter Building, in New York. The number honors the birth date of Jack Kirby, co-creator of the team: August 28."
      ],
      "now": "The Four left there. According to a Doomsday trailer, it is also the home world of Victor von Doom.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "The whole film takes place there, in 1964."
      }
    },
    {
      "id": "t10005",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "Earth-10005",
      "description": "The universe of Fox's X-Men.",
      "profile": [
        "It is the name Deadpool & Wolverine gives to the world of the X-Men films made by Fox between 2000 and 2020. Its anchor being was Logan, who died in 2029. Without him, the universe began to fade, and the TVA wanted to speed the process up. Wade Wilson and another Wolverine save it."
      ],
      "now": "Saved. Home of Deadpool and of a new Wolverine.",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Gets a number, is threatened by the TVA and saved by Wade and Logan.",
        "xmen1": "Where the film takes place.",
        "xmen2": "Where the film takes place."
      }
    },
    {
      "id": "latveria",
      "type": "l",
      "group": "Other universes and dimensions",
      "name": "Latveria",
      "description": "Doctor Doom's country.",
      "profile": [
        "In the comics, a small mountainous kingdom in Eastern Europe, ruled by Victor von Doom. It is a dictatorship with no crime or hunger, and that is part of Doom's argument that the world would be better under his command.",
        "In the MCU it has only been hinted at. In First Steps, when Sue Storm gathers the countries of Earth-828, the seat reserved for Latveria is empty. Doomsday should show it: the production confirmed characters described as Latverian witches."
      ],
      "now": "Not shown yet.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "The country's seat appears empty.",
        "doomsday": "Expected to appear; there are Latverian witches in the cast."
      }
    },
    {
      "id": "joias",
      "type": "o",
      "group": "Infinity Stones",
      "name": "The six Stones, together",
      "description": "What they are and where they came from.",
      "profile": [
        "Before the universe existed, there were six singularities. With the explosion that created everything, they condensed into six stones, each governing one aspect of existence: Space, Mind, Reality, Power, Time and Soul. Together, they let you do anything with a thought.",
        "None can be held unprotected by an ordinary being. That is why almost all of them appear inside a container: a cube, a scepter, an orb, a necklace. To use all six at once, a gauntlet is needed to channel them, and even so the discharge, similar to gamma radiation, burns whoever uses it.",
        "There were four uses of all six together. Thanos, in 2018, wipes out half of all life. Thanos again, shortly after, uses the Stones to destroy them, which nearly kills him. Banner, in 2023, with Stones brought from the past, brings back the vanished. Stark, that same afternoon, wipes out Thanos and his army, and dies.",
        "The Stones work within the universe they belong to. At the TVA, which sits outside of time, they are inert objects kept in drawers. It is the sign that the Multiverse Saga plays with larger forces."
      ],
      "now": "Destroyed on the main timeline in 2018. The ones used in Endgame were returned to the past by Steve Rogers.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Order of appearance",
          "value": "Space (2011), Mind (2012), Reality (2013), Power (2014), Time (2016), Soul (2018)"
        },
        {
          "label": "Container for using all six",
          "value": "The Infinity Gauntlet, forged on Nidavellir; in Endgame, a gauntlet made by Stark"
        }
      ],
      "appearances": {
        "ving2": "Thor has a vision of the Stones and realizes someone is gathering them.",
        "gg1": "The Collector explains they are remnants of singularities that predate the universe.",
        "ginfinita": "Wong and Strange explain what each one governs. Thanos gathers all six and uses them.",
        "ultimato": "Thanos destroys them. The Avengers fetch them in the past, use them twice and return them.",
        "loki1": "At the TVA they don't work and are used as paperweights."
      }
    },
    {
      "id": "espaco",
      "type": "o",
      "group": "Infinity Stones",
      "name": "Space Stone",
      "description": "The blue one. It was in the Tesseract.",
      "profile": [
        "Gives access to any point in the universe. Whoever controls it opens portals and travels instantly, alone or with armies. It is also a practically infinite energy source, and that is how humans treat it for decades, without knowing what they have.",
        "It is the Stone with the longest history on Earth. Odin left it hidden in Norway. Hydra finds it in 1942 and uses it to make weapons. The cube carries the Red Skull away, falls into the ocean with Steve's plane, is recovered by Howard Stark and ends up with S.H.I.E.L.D. In the 1980s, an experimental engine powered by it gives Carol Danvers her powers. In 2012 Loki steals it to open the portal over New York. Thor takes it to Asgard's vault, where it is used to remake the Bifrost bridge. Loki takes it from there before the planet explodes."
      ],
      "now": "Destroyed by Thanos in 2018. The 2012 version was taken by the Loki who escaped; the 1970 one, returned by Steve.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Color",
          "value": "Blue"
        },
        {
          "label": "Governs",
          "value": "Space: distance and place"
        },
        {
          "label": "What it does",
          "value": "Opens portals and transports to any point; supplies unlimited energy"
        },
        {
          "label": "Container",
          "value": "The Tesseract, a cube"
        },
        {
          "label": "Used by",
          "value": "Red Skull, Loki, Thanos; indirectly, Carol Danvers"
        }
      ],
      "appearances": {
        "cap1": "Hydra makes weapons with the Tesseract.",
        "ving1": "Loki opens the portal over New York.",
        "ragnarok": "Loki takes it from Asgard's vault.",
        "cmarvel": "Origin of Carol's powers.",
        "ginfinita": "Thanos crushes the cube and keeps the Stone.",
        "ultimato": "Sought in 2012, lost, and recovered in 1970.",
        "thor": "In the credits scene, Fury shows the cube to Selvig.",
        "loki1": "Loki's Tesseract is confiscated by the TVA, where it doesn't work."
      }
    },
    {
      "id": "mente",
      "type": "o",
      "group": "Infinity Stones",
      "name": "Mind Stone",
      "description": "The yellow one. It was in Loki's scepter and later on Vision's forehead.",
      "profile": [
        "Governs thought. It lets you dominate another person's will, read and project ideas and enhance the intelligence of whoever uses it. It contains within itself something like a mind, and that is what Stark draws on as the basis for Ultron.",
        "Thanos gives it to Loki inside a scepter for the invasion of Earth, the only case in which he parts with a Stone. The scepter ends up with S.H.I.E.L.D., that is, with Hydra, which uses it in experiments in Sokovia: it is exposure to it that awakens the powers of Wanda and Pietro Maximoff. The Avengers recover it, Ultron is born from it, and the Stone ends up on Vision's forehead, to whom it gives consciousness.",
        "It is the last one Thanos takes, ripping it from Vision."
      ],
      "now": "Destroyed by Thanos in 2018, after having already been destroyed by Wanda and restored with the Time Stone.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Color",
          "value": "Yellow (the scepter glows blue because of its casing)"
        },
        {
          "label": "Governs",
          "value": "The mind: will, thought, consciousness"
        },
        {
          "label": "What it does",
          "value": "Controls people, enhances intelligence, creates artificial consciousness, awakens latent powers"
        },
        {
          "label": "Container",
          "value": "Loki's scepter; later, Vision's forehead"
        },
        {
          "label": "Used by",
          "value": "Loki, Hydra, Ultron, Vision, Thanos"
        }
      ],
      "appearances": {
        "ving1": "In the scepter, it controls Clint Barton and others.",
        "cap2": "In the credits scene, the scepter is with Hydra.",
        "ving2": "Gives rise to Ultron and Vision.",
        "ginfinita": "Wanda destroys it; Thanos undoes that and rips it out.",
        "ultimato": "Sought in 2012.",
        "wandavision": "We see how it awakened Wanda's powers.",
        "gcivil": "On Vision's forehead. He admits he doesn't fully understand it."
      }
    },
    {
      "id": "realidade",
      "type": "o",
      "group": "Infinity Stones",
      "name": "Reality Stone",
      "description": "The red one. It was the Aether.",
      "profile": [
        "Alters matter itself: turns one thing into another, creates illusions that can be touched, undoes what exists. Thanos uses it to turn shots into soap bubbles and to stage an entire place that had already been destroyed.",
        "It is the only one that doesn't appear as a stone. It takes the form of a red liquid, the Aether, which lodges in a living body and consumes it. The Dark Elves wanted to use it to put out the universe's light. Thor's grandfather hid it, and it was kept for millennia until Jane Foster found it by accident. After the crisis, Asgard, which already held the Tesseract, judges it unwise to keep two Stones in the same place and hands it to the Collector, on Knowhere."
      ],
      "now": "Destroyed by Thanos in 2018. The 2013 version was taken from Jane Foster and returned.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Color",
          "value": "Red"
        },
        {
          "label": "Governs",
          "value": "Reality: what is true and what things are"
        },
        {
          "label": "What it does",
          "value": "Transforms matter, creates solid illusions, rewrites what exists around it"
        },
        {
          "label": "Container",
          "value": "None; it is a fluid, the Aether"
        },
        {
          "label": "Used by",
          "value": "Malekith, of the Dark Elves; Thanos"
        }
      ],
      "appearances": {
        "thor2": "The Aether takes over Jane Foster's body.",
        "ginfinita": "Thanos takes it from the Collector.",
        "ultimato": "Sought in Asgard, in 2013.",
        "gg1": "Mentioned by the Collector, who already holds it."
      }
    },
    {
      "id": "poder",
      "type": "o",
      "group": "Infinity Stones",
      "name": "Power Stone",
      "description": "The purple one. It was inside the orb.",
      "profile": [
        "It is raw force. It increases without limit the destructive capacity of whoever holds it and can devastate a planet's surface with a touch. It is also the hardest to hold: it disintegrates in seconds any being who isn't extraordinarily resilient. The Guardians survive it only by sharing the load, hand in hand, and because Peter Quill is half Celestial.",
        "It was in a ruined temple on the planet Morag, inside a metal orb. Quill steals it without knowing what it is. Ronan fits it into his hammer to destroy Xandar. Defeated, the Stone is left in the keeping of the Nova Corps. It is the first one Thanos takes, decimating Xandar to do so."
      ],
      "now": "Destroyed by Thanos in 2018. The 2014 version was returned to Morag.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Color",
          "value": "Purple"
        },
        {
          "label": "Governs",
          "value": "Power: energy and destruction"
        },
        {
          "label": "What it does",
          "value": "Amplifies the bearer's strength; destroys cities and planets"
        },
        {
          "label": "Container",
          "value": "An orb; later Ronan's hammer"
        },
        {
          "label": "Used by",
          "value": "Ronan, the Guardians together, Thanos"
        }
      ],
      "appearances": {
        "gg1": "Stolen by Quill; used by Ronan; handed over to Xandar.",
        "ginfinita": "Thanos already has it in the first scene.",
        "ultimato": "Sought on Morag, in 2014."
      }
    },
    {
      "id": "tempo",
      "type": "o",
      "group": "Infinity Stones",
      "name": "Time Stone",
      "description": "The green one. It was in the Eye of Agamotto.",
      "profile": [
        "Controls the flow of time in an object, a person or a place: fast-forward, rewind, repeat. It also lets you look at possible futures. Strange uses it to trap an entity in a time loop until it gives up, and, later, to examine 14,000,605 outcomes of the war against Thanos.",
        "It was found by Agamotto, the first Sorcerer Supreme, who made an amulet for it, the Eye of Agamotto. The Masters of the Mystic Arts guarded it for centuries, and it is the reason a Sorcerer Supreme exists. The Ancient One explains to Banner, in Endgame, that taking a Stone from its time creates a branched reality, and she only hands it over because he promises to return it.",
        "Strange swears to protect it above any life and later hands it to Thanos in exchange for Stark's, because he saw that only so would there be victory. Thanos uses it to undo the destruction of the Mind Stone."
      ],
      "now": "Destroyed by Thanos in 2018. The 2012 version was returned to the Ancient One.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Color",
          "value": "Green"
        },
        {
          "label": "Governs",
          "value": "Time: sequence, cause and effect"
        },
        {
          "label": "What it does",
          "value": "Rewinds, advances and repeats time; shows possible futures"
        },
        {
          "label": "Container",
          "value": "The Eye of Agamotto, an amulet"
        },
        {
          "label": "Used by",
          "value": "The Ancient One, Strange, Thanos"
        }
      ],
      "appearances": {
        "estranho": "Strange uses it against Dormammu.",
        "ragnarok": "Around Strange's neck.",
        "ginfinita": "Strange sees the futures and hands it to Thanos.",
        "ultimato": "The Ancient One lends it to Banner, in 2012."
      }
    },
    {
      "id": "alma",
      "type": "o",
      "group": "Infinity Stones",
      "name": "Soul Stone",
      "description": "The orange one. It was on Vormir.",
      "profile": [
        "It is the least explained. The MCU says it has a certain wisdom of its own and demands a price: it yields only to whoever sacrifices someone they love, a soul for a soul. The exchange can't be undone, and that is why Gamora and Natasha don't come back with the others.",
        "As for what it does, the films show little. After each snap, whoever used the Stones finds themselves for a moment in an orange-tinted place, facing someone they lost. The general idea is that it governs the life and essence of beings.",
        "It is the only one without a container and without a previous owner. The guardian, the Red Skull, only points the way."
      ],
      "now": "Destroyed by Thanos in 2018. The 2014 version was returned to Vormir; Steve's reunion with the Red Skull is not shown.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Color",
          "value": "Orange"
        },
        {
          "label": "Governs",
          "value": "The soul: the life and essence of each being"
        },
        {
          "label": "What it does",
          "value": "Little shown; perceives and touches souls, and demands a life in order to be obtained"
        },
        {
          "label": "Container",
          "value": "None; it sits on an altar on Vormir"
        },
        {
          "label": "Used by",
          "value": "Thanos"
        }
      ],
      "appearances": {
        "ginfinita": "Thanos sacrifices Gamora.",
        "ultimato": "Natasha sacrifices herself; Clint takes the Stone."
      }
    },
    {
      "id": "mjolnir",
      "type": "o",
      "group": "Weapons and metals",
      "name": "Mjolnir and Stormbreaker",
      "description": "Thor's weapons.",
      "profile": [
        "Mjolnir is the hammer forged on Nidavellir, with an enchantment from Odin: only the worthy can lift it. It channels lightning and returns to the hand of whoever throws it. Besides Thor, Vision, Steve Rogers and Jane Foster have lifted it. Hela destroys it with one hand.",
        "Stormbreaker is the axe Thor forges to kill Thanos. It is stronger than the hammer, doesn't require worthiness and opens the Bifrost, the bridge that leads anywhere. Its handle is an arm of Groot's."
      ],
      "now": "Mjolnir, remade, stayed with Thor. Stormbreaker passed to Love, his adoptive daughter.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Falls to Earth with Thor and only returns to him when he is willing to die for others.",
        "ving2": "No one at the party can lift it. Vision lifts it effortlessly.",
        "ragnarok": "Hela crushes it with one hand. Thor discovers the power didn't come from it.",
        "ginfinita": "Thor forges a stronger replacement on Nidavellir, the axe Stormbreaker.",
        "ultimato": "Thor brings it from 2013. Steve lifts it in the battle and returns it afterward.",
        "thor4": "The pieces remake themselves for Jane Foster. The axe is used by Gorr as a key."
      }
    },
    {
      "id": "vibranium",
      "type": "o",
      "group": "Weapons and metals",
      "name": "Vibranium and the shield",
      "description": "Wakanda's metal.",
      "profile": [
        "A metal from a meteorite, able to absorb and return impact energy. Almost all of the world's supply is in Wakanda, and a second deposit, at the bottom of the sea, belongs to Talokan.",
        "Captain America's shield was made by Howard Stark with the little vibranium the United States had. It is a symbol and a weapon. It passes from Steve to Sam, is taken by John Walker and goes back to Sam. Vision's body, Bucky's arm and the Panther's suits are also made of vibranium."
      ],
      "now": "The shield is with Sam Wilson.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Howard Stark makes the shield with all the metal the Americans had.",
        "ving2": "Ultron buys Klaue's stock to make a body and the Sokovia machine.",
        "pantera": "Its origin is shown, in a meteorite, and everything Wakanda did with it.",
        "ultimato": "Thanos splits the shield. The elderly Steve hands Sam a whole shield.",
        "falcao": "The shield goes from the museum to Walker and back to Sam.",
        "wakanda": "The contest over the metal leads to the discovery of Talokan.",
        "gcivil": "T'Challa's suit. Steve drops the shield in Siberia.",
        "cap4": "Sam uses wings and a suit made in Wakanda."
      }
    },
    {
      "id": "adamantium",
      "type": "o",
      "group": "Weapons and metals",
      "name": "Adamantium",
      "description": "Wolverine's metal, now in the MCU.",
      "profile": [
        "In the X-Men films it is the indestructible alloy that coats Wolverine's bones and claws. In the MCU it appears in 2025 as a natural element found on Celestial Island, tougher than vibranium and unowned, which sparks a race among countries.",
        "It is the first piece of the X-Men's world to exist physically on the main Earth."
      ],
      "now": "Mined under an international treaty.",
      "inDoomsday": false,
      "appearances": {
        "xmen2": "The lab where the metal was implanted in him is shown.",
        "cap4": "Discovered on Celestial Island. It becomes the center of a crisis between powers.",
        "deadpool": "Wade uses the dead Logan's skeleton as a weapon.",
        "xmen1": "Wolverine's claws and skeleton, as yet unexplained."
      }
    },
    {
      "id": "soro",
      "type": "o",
      "group": "Technology and magic",
      "name": "Super-soldier serum",
      "description": "The formula that created Captain America.",
      "profile": [
        "Created by the scientist Abraham Erskine in the 1940s. It takes strength, speed, endurance and healing to the limit of the human body, and also amplifies character: the good gets better, the bad gets worse. Erskine is assassinated right after administering it to Steve, and the formula is lost.",
        "Almost everyone tries to recreate it. Banner's attempt creates the Hulk. Hydra makes the Winter Soldier. The American government tests it on Black soldiers without consent, among them Isaiah Bradley. The Soviets make the Red Guardian. John Walker takes a stolen dose. Valentina's Sentry project is the most recent chapter."
      ],
      "now": "There is no known formula anymore.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Erskine administers it to Steve and is killed. The formula is lost.",
        "hulk": "The attempt to recreate it with gamma radiation creates the Hulk and the Abomination.",
        "gcivil": "In 1991, the Winter Soldier steals five doses, which create other soldiers.",
        "falcao": "A new version circulates in Madripoor. Zemo destroys almost all of it, and Walker takes the last dose.",
        "thunder": "The Sentry Project tries to go beyond the serum and kills all the volunteers except Bob.",
        "viuva": "The Soviet version gave rise to the Red Guardian."
      }
    },
    {
      "id": "pym",
      "type": "o",
      "group": "Technology and magic",
      "name": "Pym particles",
      "description": "The shrinking technology.",
      "profile": [
        "Particles discovered by Hank Pym that reduce or increase the distance between atoms. They shrink a person to the size of an ant while keeping their strength, or make them grow to about 65 feet (20 meters). Taken to the extreme, they give access to the Quantum Realm.",
        "In Endgame they are the fuel for time travel: each traveler needs one dose to go and one to return, and the supply is counted."
      ],
      "now": "Controlled by the Pym family.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Pym hides them for decades. Cross recreates them.",
        "ultimato": "Each time trip uses one dose. The supply is replenished in 1970.",
        "gcivil": "Scott uses them in reverse and becomes a giant.",
        "hformiga2": "They power the quantum tunnel and shrink the lab.",
        "quantumania": "Janet used them to render Kang's core useless."
      }
    },
    {
      "id": "darkhold",
      "type": "o",
      "group": "Technology and magic",
      "name": "Darkhold",
      "description": "The book of the damned.",
      "profile": [
        "A book of dark magic that gives the reader what they most want and charges their sanity in return. Among other things, it teaches how to take over the body of a version of yourself in another universe. Agatha Harkness had it, and Wanda takes it at the end of WandaVision.",
        "Multiverse of Madness reveals that the book is a copy of inscriptions carved in a temple on Mount Wundagore, which has a throne awaiting the Scarlet Witch. Wanda destroys the book in every universe and brings the temple down."
      ],
      "now": "Destroyed in every universe.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "It is with Agatha, who reads the prophecy of the Scarlet Witch in it. Wanda keeps the book.",
        "estranho2": "Corrupts Wanda and teaches her to take over bodies in other universes. She destroys it in all of them."
      }
    },
    {
      "id": "multiverso",
      "type": "c",
      "group": "Multiverse and time",
      "name": "Multiverse",
      "description": "Many universes existing at the same time.",
      "profile": [
        "The idea is that this universe is one among infinite. Each has its own history: in one, the heroes are different; in another, the same ones made different choices; in another, the 1960s already had flying cars.",
        "In the MCU, the multiverse existed, went to war and was suppressed by He Who Remains, who kept a single thread for an indefinite time. It came back into existence when he died. Today it is kept alive by Loki.",
        "Universes have numbers. The main Earth is 616. 838 is the Illuminati's. 828 is the Fantastic Four's. 10005 is the Fox X-Men's and Deadpool's. You pass from one to another by magic, through America Chavez's power, with TVA devices or, like the Four, in a ship."
      ],
      "now": "Collapsing, according to the premise of Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Opens up for real, when Sylvie kills He Who Remains.",
        "whatif": "Each episode visits a different universe.",
        "aranha3": "A spell brings in villains and two Spider-Men from other universes.",
        "estranho2": "Strange and America cross several. The idea of an incursion emerges.",
        "loki2": "Loki takes over keeping all the branches alive.",
        "deadpool": "The Void is shown and the X-Men's universe is given a number.",
        "quarteto": "Takes place entirely on another Earth.",
        "doomsday": "According to the premise, it is collapsing.",
        "quantumania": "Kang was exiled from the multiverse by his own variants.",
        "marvels": "A tear links this universe to another, where Monica is stuck.",
        "aranha2": "Mysterio says he comes from another Earth. It's a lie, but the idea stays."
      }
    },
    {
      "id": "variantes",
      "type": "c",
      "group": "Multiverse and time",
      "name": "Variants",
      "description": "Versions of the same person.",
      "profile": [
        "A variant is someone's version in another universe or another branch of time. It can be nearly identical, or have a different face, a different gender, a different species: the series Loki shows an alligator Loki.",
        "It is the device that lets the MCU bring actors back in different roles or repeat dead characters. The current Loki is a variant of the one who died. The current Gamora, too. The Wolverine in Deadpool & Wolverine is a variant of the one who died in Logan. The three Spider-Men of No Way Home are variants of each other."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "loki1": "The term is introduced. There are Lokis of every kind.",
        "aranha3": "Three versions of Peter Parker meet.",
        "estranho2": "Versions of Strange, Wanda, Mordo, Xavier and Reed.",
        "deadpool": "Dozens of Wolverines and an army of Deadpools.",
        "ultimato": "Without the name yet: the 2012 Loki, the Gamora and the 2014 Thanos.",
        "whatif": "All the protagonists are variants of known characters.",
        "quantumania": "Thousands of versions of Kang.",
        "loki2": "The TVA employees learn about the lives they had."
      }
    },
    {
      "id": "incursoes",
      "type": "c",
      "group": "Multiverse and time",
      "name": "Incursions",
      "description": "When two universes collide.",
      "profile": [
        "An incursion is what happens when the border between two universes gives way and one rolls over the other. One of them, or both, is destroyed. According to Multiverse of Madness, it is enough for someone to leave too large a mark on a universe that isn't their own. Earth-838's Strange caused one by using the Darkhold and was executed for it.",
        "It is the danger that replaces the Infinity Stones in this saga: a threat that no hero solves by force.",
        "In the comics, a series of incursions destroys universe after universe until two remain. When the last two collide, Doctor Doom saves fragments of several worlds and joins them on a single planet, Battleworld, where he reigns. It is the Secret Wars story. The MCU is not obliged to follow it, but the saga's last film bears that name."
      ],
      "now": "According to the premise of Doomsday, the multiverse is collapsing and three universes are on a collision course.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "The Illuminati explain the concept, and Strange visits a universe destroyed by one. Clea warns him of another.",
        "marvels": "The hole opened by Dar-Benn links two universes and has to be closed from the inside.",
        "cap4": "Sterns warns Sam that there are other worlds and that they are on their way.",
        "doomsday": "An expected theme, with no official confirmation."
      }
    },
    {
      "id": "linha",
      "type": "c",
      "group": "Multiverse and time",
      "name": "Sacred Timeline",
      "description": "The single script the TVA enforced.",
      "profile": [
        "It was the name given to the single chain of events allowed by He Who Remains. Any relevant deviation was called a Nexus event, created a branch and was erased.",
        "After his death, the term loses meaning: there are countless branches, and the old Sacred Timeline is just one more, although the films still use the name for the main Earth. Loki's final image is that of a tree, with him at the trunk."
      ],
      "now": "Replaced by a tree of branches.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "The TVA protects it by erasing branches, until Sylvie kills the one who kept it.",
        "loki2": "The Loom that wove it is destroyed. The branches come to form a tree.",
        "deadpool": "The TVA uses the name for the main timeline, the Avengers'."
      }
    },
    {
      "id": "ancora",
      "type": "c",
      "group": "Multiverse and time",
      "name": "Anchor beings",
      "description": "The person a universe depends on.",
      "profile": [
        "A rule introduced in Deadpool & Wolverine. Every universe has an individual of central importance. When that person dies, the universe doesn't end right away; it fades out over thousands of years.",
        "The one on Earth-10005 was Logan. The film doesn't say who the one on the main Earth is. It is a new rule, used in only one film, and may or may not matter again."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Paradox explains the rule: without Logan, Earth-10005 withers. The agency refuses to say who the main timeline's anchor is."
      }
    },
    {
      "id": "viagem",
      "type": "c",
      "group": "Multiverse and time",
      "name": "Time travel",
      "description": "The rules of Endgame.",
      "profile": [
        "In the MCU you don't change your own past. Whoever goes back and alters something creates a branch, a parallel reality, and the present they left remains the same. That is why the Avengers can't simply kill baby Thanos: it wouldn't bring anyone back.",
        "What they do is borrow. They fetch the Stones at moments when they existed, use them in the present and return each one to the instant it came from, so those realities carry on normally.",
        "Two loose ends were left and became story: the 2012 Loki, who escapes, and the 2014 Thanos, who comes to the future and dies here, taking that year's Gamora with him."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "ultimato": "Stark solves the navigation. Banner explains that the past isn't altered, only branched.",
        "loki1": "The TVA says the Avengers' trip was foreseen. Loki's escape wasn't.",
        "hformiga2": "Janet says there are time vortices in the Quantum Realm.",
        "quantumania": "Kang dominates time with a technology of his own."
      }
    },
    {
      "id": "blip",
      "type": "c",
      "group": "World history",
      "name": "The Blip",
      "description": "The five years when half of the universe vanished.",
      "profile": [
        "The name given to the interval between Thanos's snap, in 2018, and Banner's, in 2023. Half of all living beings, chosen at random, turned to dust. Those who remained lived five years of mourning, with empty cities and dismantled governments.",
        "Banner brings everyone back to the present, not to the moment they vanished, so as not to erase the five years lived. Those who returned are the same age and find houses occupied, spouses who remarried, younger siblings who became older.",
        "It explains much of Phase 4: Monica returns and her mother has died; Yelena returns and her sister has died; a radical group wants back the borderless world of those years; Clint spent the period killing."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Thanos snaps his fingers, and half of all living beings vanish.",
        "ultimato": "The five years of mourning and everyone's return are shown.",
        "aranha2": "The term appears. The school restarts the year with students who haven't aged.",
        "wandavision": "Monica comes back in a panicked hospital and finds her mother has died.",
        "falcao": "Those who occupied empty houses and borders are expelled when the others return.",
        "eternos": "The return of billions of people supplies the energy the Celestial lacked to be born.",
        "gaviao": "Clint spent the five years as Ronin. Yelena vanished and, on returning, her sister had already died.",
        "hformiga2": "Catches Hank, Janet and Hope with Scott inside the quantum tunnel.",
        "cmarvel": "In the credits scene, the Avengers count the vanished.",
        "shangchi": "Cited on posters offering help to those who returned.",
        "wakanda": "Nakia moved to Haiti after it."
      }
    },
    {
      "id": "acordos",
      "type": "c",
      "group": "World history",
      "name": "Sokovia Accords",
      "description": "The law that split the Avengers.",
      "profile": [
        "A treaty signed by 117 countries in 2016, after the destruction of Sokovia and an incident in Lagos. It determines that people with powers may only act with the authorization of a UN panel and must register.",
        "Stark supports it, out of guilt. Steve refuses, thinking that those who decide may be wrong or corrupted. Whoever refuses becomes a fugitive. The Accords remain in force for years and are repealed offscreen, as mentioned in She-Hulk."
      ],
      "now": "Repealed.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Presented by Ross. Stark signs, Steve refuses, and the team splits.",
        "ginfinita": "Ross still orders the fugitives arrested. Rhodes ignores him.",
        "viuva": "Natasha is wanted for violating them.",
        "mulherhulk": "Matt Murdock mentions that they were repealed.",
        "hformiga2": "Scott serves house arrest for having violated them."
      }
    },
    {
      "id": "mutantes",
      "type": "c",
      "group": "World history",
      "name": "Mutants",
      "description": "Those born with powers.",
      "profile": [
        "In the comics, mutants are people with a gene that awakens powers, usually in adolescence. There is no accident or experiment: they are born that way. That is why they serve as a metaphor for any persecuted minority.",
        "In the MCU the word has already been used for Kamala Khan and Namor, and Brand New Day introduces Jean Grey and her sister, born telepaths hunted by a government agency. Adding up the laws against people with powers that appear in Daredevil: Born Again and in Wonder Man, the main Earth already has the climate of persecution that defines the X-Men stories. What's missing is an explanation of why they only show up now."
      ],
      "now": "Few known cases on the main Earth.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "The concept, in the Fox universe: people born with powers who are feared.",
        "msmarvel": "Bruno says Kamala has a mutation. It is the first time in the MCU.",
        "wakanda": "Namor describes himself as a mutant.",
        "aranha4": "Jean Grey and her sister are born telepaths, hunted by the government.",
        "xmen2": "A military man tries to exterminate them.",
        "deadpool": "Wade and Logan come from a world of mutants.",
        "marvels": "Beast appears in a parallel universe."
      }
    },
    {
      "id": "ronan",
      "type": "p",
      "group": "Villains",
      "name": "Ronan",
      "description": "The Accuser, a Kree fanatic.",
      "profile": [
        "An officer of the Kree empire who doesn't accept the peace treaty with the planet Xandar and carries on the war on his own. To do so he allies with Thanos: he delivers the orb he wants and receives in return the destruction of Xandar.",
        "On discovering that the orb holds the Power Stone, he keeps it, fits it into his hammer and breaks with Thanos. He is pulverized by the Guardians, who share the Stone's load among themselves. He appears younger, still inside the empire, in Captain Marvel."
      ],
      "now": "Dead in 2014.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Chases the orb for Thanos, takes the Power Stone for himself and attacks Xandar. He is killed by the Guardians.",
        "cmarvel": "In 1995, he commands the Kree squadron that comes to bomb Earth and backs off before Carol Danvers."
      }
    },
    {
      "id": "ego",
      "type": "p",
      "group": "Villains",
      "name": "Ego",
      "description": "The living planet, father of Peter Quill.",
      "profile": [
        "A Celestial: an ancient consciousness that spent millions of years alone and formed an entire planet around itself. He created a human body to visit other worlds and, disappointed with what he saw, decided to turn everything into an extension of himself.",
        "To do so he planted seedlings on thousands of planets and fathered children with women of several species, hoping one would inherit the power needed to activate them. He sent Yondu to fetch the children and killed all those who were no use. Quill was the only one who inherited the gift, and Yondu, suspicious, never delivered him. Ego loved Quill's mother enough to want to stay on Earth, and for that very reason killed her, putting a tumor in her head."
      ],
      "now": "Dead. Mantis is also his daughter.",
      "inDoomsday": false,
      "appearances": {
        "gg2": "Finds his son, teaches him the Celestial power, reveals the plan and is destroyed by a bomb at his own core.",
        "ggnatal": "Mentioned: Mantis reveals she is also his daughter."
      }
    },
    {
      "id": "gorr",
      "type": "p",
      "group": "Villains",
      "name": "Gorr",
      "description": "The God Butcher.",
      "profile": [
        "The last survivor of a devout people, with his young daughter, in a desert. The girl dies of thirst while he prays. Then he finds the god he dedicated his life to, in an oasis, mocking worshippers like him. A sword able to kill gods offers itself, and he accepts.",
        "The sword gives him power over shadows and slowly consumes him. Gorr is right in his diagnosis, since the film's gods are indeed indifferent, and wrong in the remedy. Before Eternity, which grants a wish, he gives up vengeance and asks for his daughter back."
      ],
      "now": "Dead. His daughter, Love, is raised by Thor.",
      "inDoomsday": false,
      "appearances": {
        "thor4": "Kills gods, kidnaps New Asgard's children to lure Thor and, in the end, uses the wish to revive his daughter."
      }
    },
    {
      "id": "dormammu",
      "type": "p",
      "group": "Villains",
      "name": "Dormammu",
      "description": "The lord of the Dark Dimension.",
      "profile": [
        "An entity that rules a place outside of time, where nothing ages or dies, and that swallows universes to expand it. He promises eternal life to those who serve him, which is true in a horrible way.",
        "It is from him that the Ancient One secretly drew the energy that kept her alive. Strange defeats him with no force at all: he brings a time loop into the dimension, something that doesn't exist there, and lets himself be killed over and over until Dormammu agrees to leave."
      ],
      "now": "Kept away from Earth by a deal. It is to his dimension that Strange and Clea go at the end of Multiverse of Madness.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Called by Kaecilius to swallow Earth. Trapped by Strange in a time loop, he agrees to leave.",
        "estranho2": "Doesn't appear. Strange enters the Dark Dimension in the credits scene.",
        "coracao": "Mentioned: the Hood's cloak is suspected to come from his dimension."
      }
    },
    {
      "id": "abutre",
      "type": "p",
      "group": "Villains",
      "name": "Adrian Toomes",
      "description": "The Vulture.",
      "profile": [
        "Owner of a small demolition company who invested everything in the New York cleanup contract after the 2012 battle and lost it to an agency created by Tony Stark. He kept the alien scrap he already had and spent eight years making weapons from it, without drawing the Avengers' attention.",
        "He is a small-scale villain with understandable motives: he supports his family and employees and hates the rich who make the rules. He finds out who Spider-Man is and, even in prison, doesn't give him up, in gratitude that Peter saved his life and his daughter's."
      ],
      "now": "In prison.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Sells weapons made of alien scrap, discovers Peter's identity in the car on the way to the dance and is saved by him in the end."
      }
    },
    {
      "id": "malekith",
      "type": "p",
      "group": "Villains",
      "name": "Malekith",
      "description": "The leader of the Dark Elves.",
      "profile": [
        "King of a people that existed before the light and wants the universe back in darkness. His weapon is the Aether, which can only be used during a rare alignment of the nine realms. Defeated once by Thor's grandfather, he hibernates for millennia until the Aether awakens in Jane Foster's body."
      ],
      "now": "Dead, crushed by his own ship.",
      "inDoomsday": false,
      "appearances": {
        "thor2": "Attacks Asgard, kills Frigga, absorbs the Aether and tries to unleash the darkness from London."
      }
    },
    {
      "id": "killian",
      "type": "p",
      "group": "Villains",
      "name": "Aldrich Killian",
      "description": "The man behind the Mandarin.",
      "profile": [
        "A disabled researcher Tony Stark left waiting on a rooftop on a New Year's night. He founded a company, cured himself with the Extremis treatment and began applying it to wounded veterans. As some of them exploded, he invented a terrorist to take the blame and profit from both sides of the war."
      ],
      "now": "Killed by Pepper Potts.",
      "inDoomsday": false,
      "appearances": {
        "hf3": "Invents the Mandarin, kidnaps Pepper and the president and is killed by her."
      }
    },
    {
      "id": "stane",
      "type": "p",
      "group": "Villains",
      "name": "Obadiah Stane",
      "description": "The partner who betrayed Stark.",
      "profile": [
        "Howard Stark's partner and, after his death, Tony's guardian and the company's number two. He sold weapons under the table and ordered the heir's death to keep everything.",
        "He is the MCU's first villain. His son, Ezekiel, appears in Ironheart."
      ],
      "now": "Dead in 2008.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Orders Tony killed, steals the reactor from his chest and builds a giant armor. He dies in the explosion of the factory's reactor.",
        "coracao": "Mentioned: the character Joe is his son."
      }
    },
    {
      "id": "zola",
      "type": "p",
      "group": "Villains",
      "name": "Arnim Zola",
      "description": "The Hydra scientist who became a computer.",
      "profile": [
        "The Red Skull's scientific arm in the war. Captured by the Allies, he was recruited by the Americans, like other German scientists, and from inside S.H.I.E.L.D. rebuilt Hydra. It was he who made Bucky the Winter Soldier. Before dying, he copied his own mind into a bank of computers."
      ],
      "now": "Destroyed in 2014.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Designs Hydra's weapons and is captured on the train.",
        "cap2": "As a mind stored on computers, he reveals to Steve and Natasha that Hydra lives inside S.H.I.E.L.D.",
        "whatif": "A copy of his mind is the virus that defeats Ultron."
      }
    },
    {
      "id": "pierce",
      "type": "p",
      "group": "Villains",
      "name": "Alexander Pierce",
      "description": "The head of Hydra inside S.H.I.E.L.D.",
      "profile": [
        "A member of the council that oversees the agency, a friend of Nick Fury's and a man who turned down a Nobel Peace Prize. He believes order requires preemptively killing anyone who might threaten it."
      ],
      "now": "Killed by Fury.",
      "inDoomsday": false,
      "appearances": {
        "cap2": "Orders Fury killed, declares Steve a fugitive and tries to launch Project Insight.",
        "ultimato": "In 2012, he tries to take the Tesseract right after the Battle of New York."
      }
    },
    {
      "id": "stryker",
      "type": "p",
      "group": "Villains",
      "name": "William Stryker",
      "description": "The military man who hunts mutants.",
      "profile": [
        "A colonel who dedicates his career to turning mutants into weapons and, later, to eliminating them. The motive is personal: his son, able to create illusions, drove his mother to suicide. Stryker lobotomized him and uses him as an instrument. It was he who implanted the adamantium in Wolverine."
      ],
      "now": "Dead at the dam.",
      "inDoomsday": false,
      "appearances": {
        "xmen2": "Raids the school, captures Xavier and tries to kill all mutants with a copy of Cerebro."
      }
    },
    {
      "id": "dreykov",
      "type": "p",
      "group": "Villains",
      "name": "Dreykov",
      "description": "The owner of the Red Room.",
      "profile": [
        "A Soviet general who came to control, from a hidden base in the sky, a worldwide network of assassins. Presumed dead in an attack by Natasha, he survived, and his daughter, wounded in the blast, was turned into Taskmaster."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "viuva": "Revealed to be alive and is killed when Yelena blows up his ship."
      }
    },
    {
      "id": "wenwu",
      "type": "p",
      "group": "Villains",
      "name": "Wenwu",
      "description": "The true owner of the ten rings.",
      "profile": [
        "A warrior who found the ten rings a thousand years ago and never aged again. With them he commanded a secret army that toppled kingdoms and governments. The Mandarin who appears in Iron Man 3 was a cheap imitation of him.",
        "He gave up everything for love of Ying Li and took it all back when she was killed. He is not a villain out of ambition: what drives him is grief, and that is what the creature behind the gate exploits."
      ],
      "now": "Dead. The rings are with his son.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Mentioned: it is his organization that kidnaps Stark.",
        "shangchi": "Believes his dead wife is calling him and attacks her village. He dies saving his son, to whom he hands the rings."
      }
    },
    {
      "id": "altoev",
      "type": "p",
      "group": "Villains",
      "name": "High Evolutionary",
      "description": "Rocket's creator.",
      "profile": [
        "A scientist obsessed with manufacturing a perfect species and a perfect society. He takes animals, modifies them, settles them in artificial worlds and destroys everything when the result displeases him. He also created the Sovereign.",
        "He can't stand that Rocket, a discard, solved a problem he didn't, and wants his brain back."
      ],
      "now": "Defeated. Rocket refused to kill him.",
      "inDoomsday": false,
      "appearances": {
        "gg3": "Sends for Rocket, destroys Counter-Earth and is beaten by the Guardians."
      }
    },
    {
      "id": "gravik",
      "type": "p",
      "group": "Villains",
      "name": "Gravik",
      "description": "The leader of the rebel Skrulls.",
      "profile": [
        "A Skrull who arrived on Earth as an orphaned child and was used by Fury as a spy for decades. He tired of waiting for the promised planet and concluded that the only possible home is this one, without humans."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "invasao": "Stages attacks to push the United States and Russia into war and seeks the Avengers' DNA. He is killed by G'iah."
      }
    },
    {
      "id": "darbenn",
      "type": "p",
      "group": "Villains",
      "name": "Dar-Benn",
      "description": "The leader of a dying planet.",
      "profile": [
        "Ruler of the Kree after the civil war that ruined the planet Hala. She blames Carol Danvers, with reason, and resolves to save her people by taking air, water and sun from the worlds Carol is fond of."
      ],
      "now": "Dead from using both bangles.",
      "inDoomsday": false,
      "appearances": {
        "marvels": "Tears passages in space to steal resources and unintentionally opens a hole to another universe."
      }
    },
    {
      "id": "karli",
      "type": "p",
      "group": "Villains",
      "name": "Karli Morgenthau",
      "description": "The leader of the Flag Smashers.",
      "profile": [
        "A teenager who during the Blip found a home and community in a world without borders, and lost both when the vanished returned. She takes the super-soldier serum and leads a group that steals medicine and food for refugee camps. Sam Wilson understands her cause and doesn't accept her methods."
      ],
      "now": "Killed by Sharon Carter.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Steals supplies, kills Walker's partner and attacks a meeting in New York."
      }
    },
    {
      "id": "heimdall",
      "type": "p",
      "group": "Asgard",
      "name": "Heimdall",
      "description": "The guardian of the Bifrost.",
      "profile": [
        "He sees everything that happens in the nine realms and controls the bridge that links them. Loyal to Asgard more than to the king of the moment: he disobeys Loki and later Odin when he thinks it right."
      ],
      "now": "Killed by Thanos. He welcomes Jane Foster in Valhalla.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Lets Thor's friends through, against Loki's order.",
        "thor2": "Helps Thor leave Asgard with Jane.",
        "ragnarok": "Hides the people from Hela and takes the bridge's sword with him.",
        "ginfinita": "With his last breath, he sends the Hulk to Earth.",
        "thor4": "In the final scene, he welcomes Jane in Valhalla."
      }
    },
    {
      "id": "frigga",
      "type": "p",
      "group": "Asgard",
      "name": "Frigga",
      "description": "The queen of Asgard.",
      "profile": [
        "Odin's wife, Thor's mother and Loki's adoptive mother, to whom she taught magic. She is the only one who keeps visiting him in prison."
      ],
      "now": "Dead in 2013.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Watches over Odin's sleep.",
        "thor2": "Dies defending Jane Foster from Malekith.",
        "ultimato": "In 2013, hours before dying, she talks to the Thor from the future and puts him back on his feet."
      }
    },
    {
      "id": "yondu",
      "type": "p",
      "group": "Guardians of the Galaxy",
      "name": "Yondu",
      "description": "The pirate who raised Peter Quill.",
      "profile": [
        "Captain of a band of Ravagers, blue-skinned, who controls an arrow with whistles. He was paid by Ego to collect his children across the galaxy. On realizing what was happening to the children, he kept the last one, a boy from Earth, and raised him in his own way, with threats and disguised affection.",
        "For trafficking children, he was expelled from the Ravagers' brotherhood. He dies giving Quill the only space suit."
      ],
      "now": "Dead in 2014.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Chases Quill for the orb and ends up fighting beside him on Xandar.",
        "gg2": "Deposed by his crew, he escapes with Rocket, saves Quill from Ego and dies in space.",
        "ggnatal": "Remembered: he was the one who gave Quill the pistols."
      }
    },
    {
      "id": "may",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Aunt May",
      "description": "The one who raised Peter Parker.",
      "profile": [
        "May Parker raises her nephew alone in Queens. She finds out he is Spider-Man at the end of Homecoming and starts supporting him. She works at a shelter for people displaced by the Blip.",
        "In No Way Home, she is the one who convinces Peter to try to help the villains instead of sending them back to their deaths. The Green Goblin wounds her, and she dies in his arms saying they did the right thing."
      ],
      "now": "Dead. Peter visits her grave.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Debuts, knowing nothing.",
        "aranha1": "Finds out the secret in the last scene.",
        "aranha2": "Organizes charity events with Spider-Man.",
        "aranha3": "Insists on curing the villains and is killed by the Green Goblin.",
        "aranha4": "Appears in a memory that Peter shows Jean Grey."
      }
    },
    {
      "id": "howard",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Howard Stark",
      "description": "Tony's father.",
      "profile": [
        "An inventor and industrialist. In the war, he works on the super-soldier program and makes Steve Rogers's shield. Later he recovers the Tesseract from the sea, founds S.H.I.E.L.D. with Peggy Carter and leaves hidden, in a model, the element that will save his son's life.",
        "A distant father. He is killed in 1991 by the Winter Soldier, along with his wife, on a road."
      ],
      "now": "Dead in 1991.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Young, he helps create Captain America.",
        "hf2": "Appears in old films, with a message for his son.",
        "hformiga": "In 1989, he is at the meeting where Pym leaves S.H.I.E.L.D.",
        "gcivil": "The video of his death is what splits the Avengers.",
        "ultimato": "In 1970, he talks to Tony without knowing who he is, on the eve of becoming a father."
      }
    },
    {
      "id": "pietro",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Pietro Maximoff",
      "description": "Wanda's brother.",
      "profile": [
        "Wanda's twin, twelve minutes older. Hydra's experiments gave him superhuman speed. He dies in the first film he appears in.",
        "In WandaVision a Pietro with a different face turns up. He is a Westview resident controlled by Agatha, with no connection to other universes."
      ],
      "now": "Dead in 2015.",
      "inDoomsday": false,
      "appearances": {
        "cap2": "Appears in a Hydra cell, in the credits scene.",
        "ving2": "Fights the Avengers, switches sides and dies protecting Clint Barton.",
        "wandavision": "An impostor with his name fools Wanda."
      }
    },
    {
      "id": "sharon",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Sharon Carter",
      "description": "The agent who became the Power Broker.",
      "profile": [
        "Peggy Carter's niece, a S.H.I.E.L.D. agent and later CIA. In Civil War, she steals Steve's shield and Sam's wings for them, and for that becomes a fugitive. Nobody forgives her or looks for her.",
        "She spends the following years in Madripoor, where she becomes the head of the black market. She receives a pardon from the government without anyone knowing it."
      ],
      "now": "Back at the CIA, selling secrets.",
      "inDoomsday": false,
      "appearances": {
        "cap2": "Steve's neighbor, actually his minder.",
        "gcivil": "Helps Steve and loses everything for it.",
        "falcao": "Saves Sam and Bucky in Madripoor, reveals herself as the Power Broker and kills Karli."
      }
    },
    {
      "id": "isaiah",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Isaiah Bradley",
      "description": "The super-soldier the country hid.",
      "profile": [
        "A Black soldier who, in the 1950s, received a version of the serum without consent. Of his fellow test subjects, he was the only one to survive. He disobeyed an order to rescue them, and for that spent thirty years in prison, being studied. His wife was told he had died."
      ],
      "now": "Free and cleared.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Tells Sam his own story and says that a Black man shouldn't want that shield.",
        "cap4": "Controlled by Sterns, he shoots the president. He is arrested again and later cleared."
      }
    },
    {
      "id": "selvig",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Erik Selvig",
      "description": "The astrophysicist.",
      "profile": [
        "Jane Foster's professor. He is called in by S.H.I.E.L.D. to study the Tesseract and has his mind taken over by Loki, who uses him to build the portal machine. The experience leaves him shaken for years."
      ],
      "now": "No appearances since 2015.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Helps Jane and gets Thor out of S.H.I.E.L.D. custody.",
        "ving1": "Controlled by Loki, he builds the portal device and leaves in it a way to shut it down.",
        "thor2": "Strips at a monument, ends up in a psychiatric hospital and helps stop Malekith.",
        "ving2": "Helps Thor understand the vision of the Stones."
      }
    },
    {
      "id": "talos",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Talos",
      "description": "The Skrull leader, Fury's friend.",
      "profile": [
        "A general of the Skrull refugees. He seems a villain in Captain Marvel and turns out to be a father looking for his family. He becomes Fury's friend and works for him for decades, waiting for the promised planet."
      ],
      "now": "Killed by Gravik.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "Chases Carol to Earth and tells her the truth about the Kree.",
        "aranha2": "Spends the film disguised as Fury.",
        "invasao": "Tries to rein in the rebels through talk and is killed."
      }
    },
    {
      "id": "betty",
      "type": "p",
      "group": "Avengers and allies",
      "name": "Betty Ross",
      "description": "The general's daughter.",
      "profile": [
        "A biologist, Bruce Banner's girlfriend at the time of the accident and Thaddeus Ross's daughter. She breaks with her father over the hunt for Banner and goes years without speaking to him."
      ],
      "now": "Reconciled with her father.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "Flees with Banner and is the one who calms the Hulk.",
        "cap4": "It is the memory of her that makes Ross return to normal. She visits her father in prison."
      }
    },
    {
      "id": "nakia",
      "type": "p",
      "group": "Wakanda and Talokan",
      "name": "Nakia",
      "description": "The spy T'Challa loved.",
      "profile": [
        "A Wakandan agent who works undercover in other countries and argues, before anyone else, that Wakanda should help the world. She saves the last herb from Killmonger's hands.",
        "After the Blip, she moved to Haiti, where she runs a school and secretly raises the son she had with T'Challa."
      ],
      "now": "In Haiti, with her son.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "Accompanies T'Challa to Korea, saves the herb and finds him among the Jabari.",
        "wakanda": "Rescues Shuri and Riri from Talokan and introduces Shuri to her nephew."
      }
    },
    {
      "id": "ramonda",
      "type": "p",
      "group": "Wakanda and Talokan",
      "name": "Ramonda",
      "description": "The queen of Wakanda.",
      "profile": [
        "T'Chaka's widow, mother of T'Challa and Shuri. She rules after her son's death and faces alone the powers that want the vibranium."
      ],
      "now": "Dead.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "Flees with her daughter to the Jabari.",
        "wakanda": "Defends the country at the UN, dismisses Okoye and drowns saving Riri Williams."
      }
    },
    {
      "id": "ancia",
      "type": "p",
      "group": "Sorcerers",
      "name": "The Ancient One",
      "description": "The master of Kamar-Taj.",
      "profile": [
        "Sorcerer Supreme for centuries, of Celtic origin. She teaches Strange. She prolongs her own life by drawing power from the Dark Dimension, something she forbids the others, believing Earth needed her until a successor appeared."
      ],
      "now": "Dead in 2016.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Trains Strange, is wounded by Kaecilius and dies after a last conversation.",
        "ultimato": "In 2012, she hands the Time Stone to Banner on learning that Strange would give it away on purpose."
      }
    },
    {
      "id": "mordo",
      "type": "p",
      "group": "Sorcerers",
      "name": "Mordo",
      "description": "The sorcerer who tolerates no exceptions.",
      "profile": [
        "The Ancient One's most faithful disciple and Strange's first friend at Kamar-Taj. He believes natural laws can't be bent. On discovering that his master broke them and seeing Strange do the same, he leaves the order and starts taking the power of other sorcerers."
      ],
      "now": "Whereabouts unknown. A variant is Sorcerer Supreme on Earth-838.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Takes in Strange, fights beside him and breaks with the order.",
        "estranho2": "The Earth-838 variant is part of the Illuminati and survives."
      }
    },
    {
      "id": "clea",
      "type": "p",
      "group": "Sorcerers",
      "name": "Clea",
      "description": "The sorceress of the Dark Dimension.",
      "profile": [
        "She appears in the last scene of Multiverse of Madness, in purple, opening a portal in the middle of the street. In the comics she is Dormammu's niece and Strange's disciple and wife. The film only says what she wants: help fixing an incursion."
      ],
      "now": "With Strange, in the Dark Dimension.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Warns Strange that he caused an incursion and takes him with her."
      }
    },
    {
      "id": "colecionador",
      "type": "p",
      "group": "Cosmos",
      "name": "The Collector",
      "description": "Taneleer Tivan.",
      "profile": [
        "An ancient being who keeps on Knowhere a collection of creatures and relics from across the galaxy. He knows what the Infinity Stones are and wants them all."
      ],
      "now": "Presumed dead by Thanos, unconfirmed.",
      "inDoomsday": false,
      "appearances": {
        "thor2": "Receives the Reality Stone from Asgard for safekeeping.",
        "gg1": "Explains the origin of the Stones to the Guardians. His collection explodes.",
        "ginfinita": "Thanos takes the Reality Stone from him before the Guardians arrive."
      }
    },
    {
      "id": "graomestre",
      "type": "p",
      "group": "Cosmos",
      "name": "The Grandmaster",
      "description": "The owner of Sakaar.",
      "profile": [
        "An eccentric and cruel ruler of the scrap planet, who keeps the population distracted with gladiator fights. The Collector's brother."
      ],
      "now": "Deposed.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "Buys Thor, puts him in the arena against the Hulk and loses the planet to a revolt."
      }
    },
    {
      "id": "tommy",
      "type": "p",
      "group": "New heroes",
      "name": "Tommy Maximoff",
      "description": "Wanda's other son.",
      "profile": [
        "Billy's twin, created by Wanda's magic in Westview, with the speed of his uncle Pietro. He ceased to exist when the barrier fell. At the end of Agatha All Along, Billy puts his soul in the body of a boy who was drowning."
      ],
      "now": "Alive in another body, in a place not revealed. He is in the cast of VisionQuest.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Born and grows up in days. He runs like his uncle.",
        "agatha": "Billy finds a body for his soul.",
        "visionquest": "In the cast."
      }
    }
  ],
  "sources": {
    "wikipedia": [
      {
        "label": "Avengers: Doomsday",
        "url": "https://en.wikipedia.org/wiki/Avengers:_Doomsday"
      },
      {
        "label": "Spider-Man: Brand New Day",
        "url": "https://en.wikipedia.org/wiki/Spider-Man:_Brand_New_Day"
      },
      {
        "label": "Daredevil: Born Again",
        "url": "https://en.wikipedia.org/wiki/Daredevil:_Born_Again_season_2"
      },
      {
        "label": "Thunderbolts*",
        "url": "https://en.wikipedia.org/wiki/Thunderbolts*"
      },
      {
        "label": "The Fantastic Four: First Steps",
        "url": "https://en.wikipedia.org/wiki/The_Fantastic_Four:_First_Steps"
      },
      {
        "label": "Captain America: Brave New World",
        "url": "https://en.wikipedia.org/wiki/Captain_America:_Brave_New_World"
      },
      {
        "label": "The Punisher: One Last Kill",
        "url": "https://en.wikipedia.org/wiki/The_Punisher:_One_Last_Kill"
      }
    ],
    "trailers": [
      {
        "label": "ComicBookMovie",
        "url": "https://comicbookmovie.com/avengers/avengers-doomsday/avengers-doomsday-d23-trailer-breakdown-everything-we-learned-from-doctor-doom-centric-special-look-a229370"
      },
      {
        "label": "SciFiNow",
        "url": "https://www.scifinow.co.uk/news/marvel-drops-new-avengers-doomsday-trailer-reynolds-jackman-confirmed/"
      },
      {
        "label": "Hero Haven",
        "url": "https://herohaven.com/blogs/news/avengers-doomsday-trailer-breakdown-easter-eggs-every-detail-you-missed"
      }
    ],
    "disneyList": {
      "label": "Disney+ list",
      "url": "https://tbreak.com/avengers-doomsday-watchlist-15-movies-shows/"
    }
  }
};
