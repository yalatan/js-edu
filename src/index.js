/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config ) {
     if(knowsProgramming){
      return Math.ceil(800/config[focus]);}
	  else {
		  return Math.ceil(800/config[focus])+ Math.ceil(500/config[focus]);
	  }
  };
  