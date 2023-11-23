

function generateRandomId(id) {
    let ending = '';
    let symbols = 'qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP0123456789';
    
    for (let i = 0; i < id; i++) {
      let randomIndex = Math.ceil(Math.random() * symbols.length);

      ending += symbols.charAt(randomIndex);
    }
  
    return ending;
  }
  
  let randomId = generateRandomId(7);

  alert(randomId); 