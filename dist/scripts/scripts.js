"use strict";document.addEventListener("DOMContentLoaded",function(){function getColours(string){switch(string){case"orange":return colours.orange;case"pink":return colours.pink;case"purple":return colours.purple;case"green":return colours.green;case"black":return colours.black;default:return colours.grey}}function updateFaceColours(){var colour=getColours(currentFaceColour);document.getElementById("js-face-custom-dark").value=colour.dark,document.getElementById("js-face-custom-medium").value=colour.medium,document.getElementById("js-face-custom-light").value=colour.light,document.querySelectorAll(".js-face-light").forEach(function(faceLayer){faceLayer.style.fill=colour.light}),document.querySelectorAll(".js-face-medium").forEach(function(faceLayer){faceLayer.style.fill=colour.medium}),document.querySelectorAll(".js-face-dark").forEach(function(faceLayer){faceLayer.style.fill=colour.dark})}function updateTriggers(){var _document$querySelect2;document.querySelectorAll(".js-y00t-change-trigger .js-child").forEach(function(trigger){(trigger=trigger.classList).remove.apply(trigger,["!border-white","ring-2","ring-blue-400"])}),(_document$querySelect2=document.querySelector('[data-body-colour="'.concat(currentBodyColour,'"] .js-child')).classList).add.apply(_document$querySelect2,["!border-white","ring-2","ring-blue-400"]),(_document$querySelect2=document.querySelector('[data-face-colour="'.concat(currentFaceColour,'"] .js-child')).classList).add.apply(_document$querySelect2,["!border-white","ring-2","ring-blue-400"])}var currentFace,currentBodyColour="grey",currentFaceColour="grey",noses=[],colours={orange:{dark:"#DE6F5B",medium:"#EF9E86",light:"#FFE1C6",nose:"#50282C"},pink:{dark:"#ED8195",medium:"#FFACB2",light:"#FBD5E7",nose:"#53272F"},purple:{dark:"#C0C7FF",medium:"#E6EDFF",light:"#F7FEFF",nose:"#B8B2F1"},green:{dark:"#588A83",medium:"#82B4AD",light:"#BEDEE2",nose:"#0F1E19"},black:{dark:"#53514F",medium:"#85807D",light:"#B3ADAD",nose:"#0F1E19"},grey:{dark:"#B1A493",medium:"#D5CEBE",light:"#F3F5EA",nose:"#0F1E19"}};document.querySelectorAll(".js-tab-trigger").forEach(function(instance){var target=instance.getAttribute("data-target");instance.addEventListener("click",function(){!function(target){var _document$querySelect;document.querySelectorAll(".js-customise-tab").forEach(function(instance){instance.classList.add("hidden")}),document.querySelectorAll(".js-tab-trigger").forEach(function(instance){instance.classList.add("bg-zinc-100")}),(_document$querySelect=document.querySelector('[data-target="'.concat(target,'"]')).classList).remove.apply(_document$querySelect,["bg-zinc-100"]),document.querySelector(".".concat(target)).classList.remove("hidden")}(target)})}),document.querySelectorAll(".js-face .js-nose-group .js-nose").forEach(function(nose){noses.push(nose)});document.querySelectorAll("[data-face-colour]").forEach(function(instance){var val=instance.getAttribute("data-face-colour");instance.addEventListener("click",function(e){currentFaceColour=val,updateTriggers(),updateFaceColours()})}),document.querySelectorAll("[data-body-colour]").forEach(function(instance){var val=instance.getAttribute("data-body-colour");instance.addEventListener("click",function(e){var colour;currentBodyColour=val,updateTriggers(),colour=getColours(currentBodyColour),document.getElementById("js-body-custom-dark").value=colour.dark,document.getElementById("js-body-custom-medium").value=colour.medium,document.getElementById("js-body-custom-light").value=colour.light,document.querySelectorAll(".js-body-light").forEach(function(bodyLayer){bodyLayer.style.fill=colour.light}),document.querySelectorAll(".js-body-medium").forEach(function(bodyLayer){bodyLayer.style.fill=colour.medium}),document.querySelectorAll(".js-body-dark").forEach(function(bodyLayer){bodyLayer.style.fill=colour.dark})})}),document.querySelector(".js-type-of-face").addEventListener("change",function(){currentFace=document.querySelector(".js-type-of-face").value,document.querySelectorAll(".js-face").forEach(function(face){face.style.opacity="0"}),document.getElementById("face-".concat(currentFace)).style.opacity="100"}),document.getElementById("use-custom-face").addEventListener("change",function(){var colours=getColours(currentFaceColour);document.getElementById("use-custom-face").checked?(document.querySelector(".js-custom-face-colours").classList.remove("hidden"),document.getElementById("js-face-custom-dark").value=colours.dark,document.getElementById("js-face-custom-medium").value=colours.medium,document.getElementById("js-face-custom-light").value=colours.light):(document.querySelector(".js-custom-face-colours").classList.add("hidden"),updateFaceColours())}),document.getElementById("use-custom-body").addEventListener("change",function(){var colours=getColours(currentBodyColour);document.getElementById("use-custom-body").checked?(document.querySelector(".js-custom-body-colours").classList.remove("hidden"),document.getElementById("js-body-custom-dark").value=colours.dark,document.getElementById("js-body-custom-medium").value=colours.medium,document.getElementById("js-body-custom-light").value=colours.light):(document.querySelector(".js-custom-body-colours").classList.add("hidden"),updateFaceColours())}),document.getElementById("js-face-custom-dark").addEventListener("input",function(){document.querySelectorAll(".js-face-dark").forEach(function(faceLayer){faceLayer.style.fill=document.getElementById("js-face-custom-dark").value})}),document.getElementById("js-body-custom-dark").addEventListener("input",function(){document.querySelectorAll(".js-body-dark").forEach(function(faceLayer){faceLayer.style.fill=document.getElementById("js-body-custom-dark").value})}),document.getElementById("js-face-custom-medium").addEventListener("input",function(){document.querySelectorAll(".js-face-medium").forEach(function(faceLayer){faceLayer.style.fill=document.getElementById("js-face-custom-medium").value})}),document.getElementById("js-body-custom-medium").addEventListener("input",function(){document.querySelectorAll(".js-body-medium").forEach(function(faceLayer){faceLayer.style.fill=document.getElementById("js-body-custom-medium").value})}),document.getElementById("js-face-custom-light").addEventListener("input",function(){document.querySelectorAll(".js-face-light").forEach(function(faceLayer){faceLayer.style.fill=document.getElementById("js-face-custom-light").value})}),document.getElementById("js-body-custom-light").addEventListener("input",function(){document.querySelectorAll(".js-body-light").forEach(function(faceLayer){faceLayer.style.fill=document.getElementById("js-body-custom-light").value})})});