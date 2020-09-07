var reviewTabs = document.getElementsByClassName('sa-desc-tablinks')
for (i = 0; i < reviewTabs.length; i++) {
    reviewTabs[i].addEventListener('click', function (evt) {
        evt.preventDefault()

        // Declare all variables
        var i, tabcontent, tablinks, tabName;

        tabName = this.dataset.tab
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("sa-desc-tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    })
}