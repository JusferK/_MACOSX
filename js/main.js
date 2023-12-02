let randomPick = [Math.floor(Math.random() * 15)];
const dnaBases = ['A', 'T', 'C', 'G'];

const returnRandBase = () => {
    return dnaBases[Math.floor(Math.random() * 4)]; 
};
  
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAequorFactory = (specimenNum, dnaBasesI) => {
    let dnaBasesArrayPick = Math.floor(Math.random() * 3);
    organism = {
        _specimenNum: specimenNum,
        _dna: dnaBasesI, 
         set mutate(newDNA) {
            let dnaBasesArray = [];
            for(let i = 0; i < dnaBases.length; i++) {
              if(dnaBases[i] === this._dna[newDNA]) {
                continue;
              } else if(dnaBases[i] !== this._dna[newDNA]) {
                dnaBasesArray.push(dnaBases[i]);
              }
            }
            this._dna[newDNA] = dnaBasesArray[dnaBasesArrayPick];
            return dnaBasesI;
        }, 
        willLikelySurvive() {
          let cCounter = 0;
          let gCounter = 0;
          let dnaLength = this._dna.length;

          for(let q = 0; q < dnaBasesI.length; q++) {
            if(this._dna[q] === 'C') {
              cCounter++;
            } else if(this._dna[q] === 'G') {
              gCounter++;
            }
          }

          let sum = cCounter + gCounter;
          let porcentage = (sum / dnaLength) * 100;

          // console.log(gCounter);
          // console.log(cCounter);
          // console.log(dnaLength);
          // console.log(this._dna);
          // console.log(porcentage);

          if(porcentage > 60) {
            return true;
          } else {
            return false;
          }
        }
    };
    return organism;
};

//let strangeOrganism = pAequorFactory(7, mockUpStrand());

const mutationCall = pAequor => {
  let newRandomPick;
  for(let a = 0; a < randomPick; a++) {
    newRandomPick =  [Math.floor(Math.random() * 15)];
  }
  pAequor.mutate = newRandomPick;
}

const compareDNA = pAequor => {
  let oldDNA = pAequor._dna;
  let newDNA = [];

  for(let e = 0; e < 15; e++) {
    mutationCall(pAequor);
    newDNA.push(pAequor._dna[e]);
  }

  let DNAlength = newDNA.length;
  let counter = 0;

  for(let j = 0; j < DNAlength; j++) {
    if(oldDNA[j] === newDNA[j]) {
      counter++;
    }
  }

  let porcentage = (counter / DNAlength) * 100;
  // console.log(`specimen #1 and specimen #2 through mutation, have a ${porcentage.toFixed(2)} in common.`);
}

// compareDNA(strangeOrganism);

// console.log(strangeOrganism.willLikelySurvive());

const organismCreator = () => {
  let newStrangeOrganism;
  let request = []

  for(let i = 1; i < 31; i++) {
    newStrangeOrganism = pAequorFactory(i, mockUpStrand())
    request.push(newStrangeOrganism);
  }

  return request;
}

console.log(organismCreator());