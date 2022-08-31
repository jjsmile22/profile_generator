const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? or knickname? ', (answer0) => {
  
  rl.question('What is an activity you like doing? ', (answer1) => {
    
    rl.question('What do you listen to while doing that? ', (answer2) => {
     
      rl.question('Which meal is your favourite? ', (answer3) => {
        
        rl.question('What is your favourite thing to eat for that meal? ', (answer4) => {
          
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            
            rl.question('What is your superpower? What are you excellent at? ', (answer6) => {
            
              console.log(`My name is ${answer0}. I enjoy ${answer1}. While I do that I like to listen to ${answer2}. My favourite meal is ${answer3}. I like to eat ${answer4} for ${answer3}. My favourite sport is ${answer5}. My superpower is ${answer6}.`);
            
              rl.close();
            })
          
            
          })
        
          
        })
      
        
      })
    
      
    })
  
    
  })

  
});