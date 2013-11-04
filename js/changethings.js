$(function() {
	setValues();
	$('#one').change(function(){
		//console.log('hoi');
		setValues();
	});
	setFont();
	$('#pickafont').change(function(){
		setFont();
	});
	setLanguage();
});

function setValues() {
	var theWidth = $('#one').val();
		$('#theText').css('width',theWidth + 'em');
		$('#miniImage > div').css('width',theWidth + 'em');
		$('#getWidth span').text('@media (min-width: '+ theWidth + 'em)')
		var elem = document.getElementById("theLetters"),
		theText = $('#theLetters').text(),
		textLength = elem.textContent.length,
		textHeight = elem.offsetHeight,
		lineCount = textHeight/24,
		wordCount = theText.split(/\s+/g).length;
		$('#output').html('±<strong>' + Math.ceil(textLength/lineCount) + '</strong> characters and ±<strong>' + Math.ceil(wordCount/lineCount) + "</strong> words");
		updateMiniImage();
}

function updateMiniImage() {
	var theText = $('#realText').html();
	$('#miniImage > div').html(theText);
}

function setFont() {
	var fontValue = $('#pickafont').val();
	$('html').css('font-family',fontValue);
	setValues();
}

function setLanguage() {
	var newLang = new Array();
		newLang['nl'] = 'Heeft u hoge kosten omdat u een gehandicapt kind heeft dat niet bij u woont, dan is het in sommige gevallen mogelijk om tweemaal kinderbijslag te krijgen. U krijgt de kinderbijslag per kwartaal. Het eerste bedrag dat u voor uw kind ontvangt, hoort bij het kwartaal ná de geboortedatum van uw kind. Uw kinderbijslag begint dus in januari, april, juli of oktober. De SVB betaalt de kinderbijslag als het kwartaal is afgelopen. Adopteert u een kind of woont u net in Nederland, dan kan de kinderbijslag op een ander moment ingaan. Om kinderbijslag te krijgen moet u verzekerd zijn voor de kinderbijslag. U krijgt kinderbijslag voor het opvoeden en verzorgen van uw eigen kinderen, maar ook voor',
		newLang['en'] = 'To get child benefit, you need to be insured under the AKW child benefit scheme. You can get child benefit for bringing up and caring for children of your own, but also for: If your child does not live with you because he or she is disabled, and you are faced with high expenses, you may be eligible for child benefit at twice the basic rate. You get child benefit once a quarter. The first payment you will receive will be for the next quarter after your childs birthday. In other words, your child benefit will start in January, April, July or October. The SVB pays child benefit after the end of each quarter. If you adopt a child or if you have just come to live in the Netherlands, your child benefit may start at a different time.',
		newLang['de'] = 'Um niederländisches Kindergeld zu bekommen, müssen Sie nach dem niederländischen Allgemeinen Kindergeldgesetz versichert sein. Sie erhalten Kindergeld für die Erziehung und Versorgung Ihrer leiblichen Kinder, jedoch auf für: Haben Sie hohe Kosten, weil Ihr Kind behindert ist und nicht bei Ihnen zu Hause wohnt, besteht unter bestimmten Voraussetzungen die Möglichkeit, doppeltes Kindergeld zu erhalten. Das Kindergeld wird pro Quartal ausgezahlt. Der erste Betrag, den Sie erhalten, wird für das Quartal nach dem Geburtsdatum Ihres Kindes gezahlt. Ihr Kindergeld beginnt somit ab Januar, April, Juli oder Oktober. Die SVB zahlt das Kindergeld nach Ablauf des Quartals aus. Wenn Sie ein Kind adoptieren oder erst vor Kurzem in die Niederlande gezogen sind, kann das Kindergeld zu einem anderen Zeitpunkt beginnen.',
		newLang['fr'] = 'Pour percevoir des allocations familiales, il faut être assuré au titre de la loi AKW. Les allocations familiales sont une participation aux frais déducation et dentretien de ses propres enfants mais également. Si vous avez des frais importants parce que vous avez un enfant handicapé qui ne vit pas chez vous, il est parfois possible de percevoir des allocations familiales doubles. Avez-vous adopté un enfant ou venez-vous darriver aux Pays-Bas? aux Pays-Bas ? Les allocations familiales prendront effet à partir du trimestre où toutes les conditions requises seront remplies.',
		newLang['es'] = 'Para tener derecho al subsidio familiar tiene que estar asegurado conforme a la Ley General del Subsidio Familiar (AKW). Le corresponde un subsidio familiar para educar y cuidar a sus hijos propios o Si tiene gastos elevados a consecuencia de una discapacidad del hijo que no vive en casa, en algunos casos puede que le corresponda un subsidio familiar doble. Abonamos el subsidio familiar por trimestres. El primer pago en beneficio de su hijo, lo efectuamos el siguiente trimestre desde la fecha de nacimiento del hijo. El subsidio familiar se abona en enero, april y en octubre. El SVB abona el subsidio familiar por trimestres vencidos. Puede que la primera vez que cobre el subsidio familiar coincida con otro momento, si adopta un niño o si acaba de fijar su residencia en Holanda.',
		newLang['pl'] = 'Aby uzyskać prawo do zasiłku rodzinnego należy być ubezpieczonym z tego tytułu. Zasiłek rodzinny jest przeznaczony na pokrycie kosztów utrzymania i wychowania dzieci własnych, a także: Jeżeli ponosisz wysokie koszty w związku ztym, że Twoje niepełnosprawne dziecko mieszka poza domem rodzinnym, w niektórych przypadkach możesz ubiegać się o zasiłek rodzinny w podwójnej wysokości. Zasiłek rodzinny jest wypłacany co kwartał. Pierwsza wypłata należy się za kwartał następujący po miesiącu, w którym dziecko się urodziło. Okres zasiłkowy rozpoczyna się zatem w styczniu, kwietniu, lipcu lub październiku. SVB wypłaca świadczenie po upływie danego kwartału. Jeżeli adoptujesz dziecko lub mieszkasz od niedawna w Holandii, to prawo do zasiłku rodzinnego może zacząć obowiązywać od innego terminu.',
		newLang['tr'] = 'Çocuk parası alabilmeniz için sigortalı olmalısınız. Öz çocuklarınızın yetiştirilmesi ve bakımı için çocuk parası alırsınız. Bunun yanısıra; Sizinle birlikte ikamet etmeyen engelli çocuğunuz için yüksek tutarda harcamalarınız varsa bazı durumlarda iki kat çocuk parası almanız mümkün olabilir. Çocuk parası üç aydan üç aya ödenir. Çocuğunuz için alacağınız ilk çocuk parası, çocuğunuzun doğduğu dönemi takip eden döneme ait olur. Yani çocuk paranız Ocak, Nisan Temmuz ya da Ekim ayından itibaren başlar. SVB çocuk paranızı üç aylık dönemin bitiminde öder. Bir çocuğu evlat edindiğinizde ya da Hollanda da yeni ikamet etmeye başladığınızda, çocuk parası farklı bir tarihte başlayabilir.';
		newLang['no'] = 'Gruppen ble dannet i 1989 av Rune Grønn, Pål Bøttger Kjærnes og Thomas Seltzer på Nesodden. Turboneger kaller musikken sin for «deathpunk». Turboneger drev lenge som et undergrunnsband og oppnådde ganske mange tilhengere – såkalte «Turbojugend» – med albumene Ass Cobra (1996) og Apocalypse Dudes (1998), men ble så oppløst etter Hans-Erik Dyvik Husbys heroinsammenbrudd under Europa-turneen i 1998. I 2002 ble de gjenforent, og opptrådte på Quartfestivalen samme år. I 2003 gikk singelen «Fuck The World» fra albumet Scandinavian Leather rett til værs på hitlistene i Norge. For dette albumet fikk bandet Spellemannprisen 2003 i klassen rock og Alarmprisen 2004 i samme klasse. De har dessuten vunnet klassen for beste liveband under Alarmprisen 2003 og Alarmprisen 2004 og Gammleng-prisen i klassen rock i 2006. I juli 2010 ble det kjent at Hans-Erik Dyvik Husby slutter i bandet, 17 år etter han ble med som vokalist. Sommeren 2011 returnerte bandet med Tony Sylvester som vokalist under en «Turbojugend»-tilstelning i Hamburg og året etter ga de ut albumet Sexual Harassment.';

	$('#pickalanguage').change(function(){
		theLang = $(this).val();
		$('html').attr('lang',theLang);
		$('#theLetters').text(newLang[theLang] + ' ' + newLang[theLang] + ' ' + newLang[theLang] + ' ' + newLang[theLang] + ' ' + newLang[theLang] + ' ' + newLang[theLang] + ' ' + newLang[theLang] + ' ' + newLang[theLang] + ' ' + newLang[theLang]);
		var rightText = $('#ln-'+theLang).html();
		$('#realText').html(rightText);
		setValues();
	});

}

/* function getAverageChars(theWidth) {

		console.log('jep');
	var elem = document.getElementById("theText"),
		textLength = elem.textContent.length,
		textHeight = elem.offsetHeight,
		lineCount = textHeight/16;
	
		elem.style.width = theWidth+'em';
		document.getElementById('output').innerHTML = (textLength/lineCount);
}
window.onload = function(){
	/* window.onkeyup = function(){
		getAverageChars(document.getElementById('getWidth').value);
	} 
	setTimeout(function(){
		getAverageChars(document.getElementById('inputTest6').value);
	},2000);

} */