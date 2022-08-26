const html = document.documentElement;
const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const switchInput = document.querySelector(".switch input");
const switchLabel = document.querySelector(".switch label");
const switchLabelText = switchLabel.querySelector("span:last-child");
const collapsedClass = "collapsed";
const lightModeClass = "light-mode";

/*TOGGLE HEADER STATE*/
collapseBtn.addEventListener("click", function () {
  body.classList.toggle(collapsedClass);
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
});

/*TOGGLE MOBILE MENU*/
toggleMobileMenu.addEventListener("click", function () {
  body.classList.toggle("mob-menu-opened");
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "open menu"
    ? this.setAttribute("aria-label", "close menu")
    : this.setAttribute("aria-label", "open menu");
});

/*SHOW TOOLTIP ON MENU LINK HOVER*/
for (const link of menuLinks) {
  link.addEventListener("mouseenter", function () {
    if (
      body.classList.contains(collapsedClass) &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      const tooltip = this.querySelector("span").textContent;
      this.setAttribute("title", tooltip);
    } else {
      this.removeAttribute("title");
    }
  });
}

/*TOGGLE LIGHT/DARK MODE*/
if (localStorage.getItem("dark-mode") === "false") {
  html.classList.add(lightModeClass);
  switchInput.checked = false;
  switchLabelText.textContent = "Light";
}

switchInput.addEventListener("input", function () {
  html.classList.toggle(lightModeClass);
  if (html.classList.contains(lightModeClass)) {
    switchLabelText.textContent = "Light";
    localStorage.setItem("dark-mode", "false");
  } else {
    switchLabelText.textContent = "Dark";
    localStorage.setItem("dark-mode", "true");
  }
});



// for Horizontal Graphs
JSC.Chart('chartDiv', {
  type: 'horizontal column',
  series: [
    {
      name: 'Current Users',
      points: [
        { x: 'Active', y: 50 },
        { x: 'Posts', y: 32 }
      ]
    }, {
      name: 'Visitors',
      points: [
        { x: 'Views', y: 30 },
        { x: 'Sent Emails', y: 22 }
      ]
    }
  ]
});

//circular grpah
// JS 
var chart = JSC.chart('chartDiv1', { 
  debug: true, 
  legend_visible: false, 
  xAxis: { 
    defaultTick: { 
      gridLine: { 
        width: 'column', 
        color: '#98FB98'
      } 
    }, 
    spacingPercentage: 0 
  }, 
  yAxis: { 
    onTop: true, 
    defaultTick: { 
      padding: 5, 
      line: { 
        width: 3, 
        length: 4, 
        color: 'white'
      }, 
      placement: 'inside', 
      label: { 
        color: '#2d2d2d', 
        style: { 
          fontSize: 13, 
          fontWeight: 'bold'
        }, 
        outline_color: '#ffffff'
      } 
    }, 
    defaultMinorTick: { 
      line: { 
        width: 2, 
        length: 5, 
        color: 'white'
      } 
    }, 
    line_width: 0, 
    scale: { 
      range: [0, 12], 
      interval: 3, 
      minorInterval: 1 
    } 
  }, 
  defaultSeries: { 
    angle: { sweep: 360, orientation: 90 }, 
    type: 'gauge column ', 
    shape: { 
      innerSize: '60%', 
      label: [ 
        { 
          text: '%name', 
          style: { fontSize: 20 } 
        }, 
        { 
          align: 'center', 
          verticalAlign: 'middle'
        } 
      ] 
    } 
  }, 
  series: [ 
    { 
      palette: ['green'], 
      name: 'Monday', 
      shape_label: [ 
        {}, 
        { text: 'Logged in<br/>5hr 30min' } 
      ], 
      points: [{ name: 'Users are active', y: [1, 6.5] }] 
    }, 
    { 
      palette: ['green'], 
      name: 'Tuesday', 
      shape_label: [ 
        {}, 
        { text: 'Logged in<br/>8hr 15min' } 
      ], 
      points: [{ name: 'Users are active', y: [10.25, 6.5] }] 
    }, 
    { 
      palette: ['green'], 
      name: 'Wednesday', 
      shape_label: [ 
        {}, 
        { text: 'Logged in<br/>7hr 30min' } 
      ], 
      points: [{ name: 'Users are active', y: [11, 6.5] }] 
    }, 
    { 
      palette: ['green'], 
      name: 'Thursday', 
      shape_label: [ 
        {}, 
        { text: 'Logged in<br/>7hr 30min' } 
      ], 
      points: [{ name: 'Users are active', y: [11, 6.5] }] 
    } ,
    { 
      palette: ['green'], 
      name: 'Friday', 
      shape_label: [ 
        {}, 
        { text: 'Logged in<br/>5hr 30min' } 
      ], 
      points: [{ name: 'Users are active', y: [11, 6.5] }] 
    } 
  ] 
}); 

