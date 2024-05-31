function setLinkedInButtonLink(){   
    const linkedInButton = document.getElementById("linkedin-btn").setAttribute("href", "https://www.linkedin.com/in/sai-mithra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app");
}

function setGithubButtonLink(){
    const githubButton = document.getElementById("github-btn").setAttribute("href", "https://github.com/mitrasai");
}

function setInstaButtonLink(){
    const instagramButton = document.getElementById("insta-btn").setAttribute("href", "https://www.instagram.com/mithraa82/?igshid=MzNlNGNkZWQ4Mg%3D%3D");
}

document.getElementById("linkedin-btn").addEventListener("click", setLinkedInButtonLink);
document.getElementById("github-btn").addEventListener("click", setGithubButtonLink);
document.getElementById("insta-btn").addEventListener("click", setInstaButtonLink);