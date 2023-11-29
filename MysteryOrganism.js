// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(arr) {
      let i = Math.floor(Math.random() * 16);
      let mutation = arr.indexOf[i];
      if (~mutation && arr[mutation] !== returnRandBase()) {
        return arr[mutation] = returnRandBase();
      }
    },
    compareDNA() {
      console.log(this.dna);
      console.log(this.mutate(arr));
      const sharedDNA = [];
      for (let i = 0; i < this.dna.length; i++) {
        for (let j = 0; j < this.mutate(arr).length; j++) {
          if (this.dna[i] === this.mutate(arr).length[i]) {
            sharedDNA.push(this.dna[i])
          }
        }
      }
      let percentage = Math.floor((sharedDNA.length - this.dna.length) / this.dna.length * 100);
      console.log(`Specimen 1 and Specimen 2 have ${percentage}% DNA in common.`);






    },
    willLikelySurvive() {
      const survivorDNA = [];
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survivorDNA.push(this.dna[i])
        }
      }
      const score = (survivorDNA.length / this.dna.length * 100);
      const survivorChance = score > 60 ? true : false;
    }
  }
};

let idCounter = 1;
const survivors = [];

const mostFit = () => {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  for (let i = 0; i < 30; i++) {
    if (pAequorFactory.willLikelySurvive() === true) {
      survivors.push(newOrg);
    }
    idCounter++
  }
}

console.log(survivors);

