const form = document.getElementById('userForm');
    const userInfo = document.getElementById('userInfo');
    const displayName = document.getElementById('displayName');
    const displayScore = document.getElementById('displayScore');
    let grade;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const score = document.getElementById('score').value;
    if(score>=90){
        grade = 'A. You passed 🎉 the test';
    }else if(score>=80){
        grade = 'B. You passed 🎉 the test';
    }else if(score>=70){
        grade = 'C. You passed 🎉 the test';
    }else if(score>=60){
        grade = 'D. You passed 🎉 the test';
    }else if(score>=50){
        grade = 'E. You passed 🎉 the test';
    }
    else{
        grade = '"F". You failed 😢 the test';
    }
      displayName.textContent = name;
      displayScore.textContent = grade;
      userInfo.style.display = 'block';
    });