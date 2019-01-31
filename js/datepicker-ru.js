/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.ru = {
	closeText: "Р—Р°РєСЂС‹С‚СЊ",
	prevText: "&#x3C;РџСЂРµРґ",
	nextText: "РЎР»РµРґ&#x3E;",
	currentText: "РЎРµРіРѕРґРЅСЏ",
	monthNames: [ "РЇРЅРІР°СЂСЊ","Р¤РµРІСЂР°Р»СЊ","РњР°СЂС‚","РђРїСЂРµР»СЊ","РњР°Р№","РСЋРЅСЊ",
	"РСЋР»СЊ","РђРІРіСѓСЃС‚","РЎРµРЅС‚СЏР±СЂСЊ","РћРєС‚СЏР±СЂСЊ","РќРѕСЏР±СЂСЊ","Р”РµРєР°Р±СЂСЊ" ],
	monthNamesShort: [ "РЇРЅРІ","Р¤РµРІ","РњР°СЂ","РђРїСЂ","РњР°Р№","РСЋРЅ",
	"РСЋР»","РђРІРі","РЎРµРЅ","РћРєС‚","РќРѕСЏ","Р”РµРє" ],
	dayNames: [ "РІРѕСЃРєСЂРµСЃРµРЅСЊРµ","РїРѕРЅРµРґРµР»СЊРЅРёРє","РІС‚РѕСЂРЅРёРє","СЃСЂРµРґР°","С‡РµС‚РІРµСЂРі","РїСЏС‚РЅРёС†Р°","СЃСѓР±Р±РѕС‚Р°" ],
	dayNamesShort: [ "РІСЃРє","РїРЅРґ","РІС‚СЂ","СЃСЂРґ","С‡С‚РІ","РїС‚РЅ","СЃР±С‚" ],
	dayNamesMin: [ "Р’СЃ","РџРЅ","Р’С‚","РЎСЂ","Р§С‚","РџС‚","РЎР±" ],
	weekHeader: "РќРµРґ",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ru );

return datepicker.regional.ru;

} ) );