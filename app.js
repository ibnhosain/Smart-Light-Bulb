// =======================
// 💡 Light ON Function
// =======================
function turnOn() {

    // 👉 glass এর জন্য glow background (light effect)
    let glassBgcolor = "radial-gradient(circle, #fff4c2 20%, #ffcc33 70%)";

    // 👉 glass এর চারপাশে আলো ছড়ানোর shadow
    let glassShadow = "0 0 40px #ffcc33, 0 0 80px #ffcc33, 0 0 140px #ffcc33";


    // 👉 filament এর রঙ (জ্বলার সময় হলুদ হয়)
    let filamentBgcolor = "#ffcc33";

    // 👉 filament এর glow effect
    let filamentShadow = "0 0 20px #ffcc33";


    // 🎯 glass এ style apply করা হচ্ছে
    document.getElementById("glass").style.background = glassBgcolor;
    document.getElementById("glass").style.boxShadow = glassShadow;


    // 🎯 filament এ style apply করা হচ্ছে
    document.getElementById("filament").style.background = filamentBgcolor;
    document.getElementById("filament").style.boxShadow = filamentShadow;

}


// =======================
// 🌑 Light OFF Function
// =======================
function turnOff() {

    // 👉 glass আবার dark করে দেওয়া (light বন্ধ)
    let glassBgcolorOff = "linear-gradient(#1a1a1a, #2a2a2a)";

    // 👉 glow remove করা
    let glassBoxshadowoff = "none";


    // 👉 filament আবার dark grey করা
    let filamentBgcolorOff = "#555";

    // 👉 filament glow remove
    let filamentShadowOff = "none";


    // 🎯 glass reset
    document.getElementById("glass").style.background = glassBgcolorOff;
    document.getElementById("glass").style.boxShadow = glassBoxshadowoff;


    // 🎯 filament reset
    document.getElementById("filament").style.background = filamentBgcolorOff;
    document.getElementById("filament").style.boxShadow = filamentShadowOff;
}
