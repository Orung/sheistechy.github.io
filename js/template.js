

//To load template for header and footer
const header = document.querySelector('#header'),
	footer = document.querySelector('#footer'),
	userDashboardHeader = document.querySelector('#userDashboardHeader'),
	userDashboardfooter = document.querySelector('#userDashboardfooter'),
	adminDashboardHeader = document.querySelector('#adminDashboardHeader');
let argUrl = window.location.pathname;

document.addEventListener('DOMContentLoaded', loadDoc);
function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'template/header.html', true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			header.innerHTML = this.responseText;

			switch (argUrl) {
				case '/about.html':
					header.querySelector('#about').classList.add('active');
					break;
				case '/code-of-conduct.html':
					header.querySelector('#code-of-conduct').classList.add('active');
          break;
        case '/events.html':
          header.querySelector('#events').classList.add('active');
          break;
        case '/blog.html':
          header.querySelector('#blog').classList.add('active');
          break;
				case '/volunteer.html':
					header.querySelector('#volunteer').classList.add('active');
					break;
				case '/contact.html':
					header.querySelector('#contact').classList.add('active');
					break;

				default:
					break;
			}
    }
    window.onscroll = function(){
      if(document.body.scrollTop < 0 || document.documentElement.scrollTop > 5){
        header.classList.add("navRed");
        header.classList.remove("navBar");
      }else{
        header.classList.add("navBar");
        header.classList.remove("navRed");
      }
    }
	};
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'template/footer.html', true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			footer.innerHTML = this.responseText;
		}
	};
}





