for (let tillHundra = 1; tillHundra < 101; tillHundra++)
        {
            if (tillHundra % 12 == 0) console.log('bish-bosh');
            
            else if (tillHundra % 3 == 0) console.log("bish");
            else if (tillHundra % 4 == 0) console.log("bosh");
            
            else console.log(tillHundra);
        }