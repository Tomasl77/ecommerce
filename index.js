var elem = $('.bs');
var count = elem.length;
var setColor = function() {
  elem.each(function(){
    var $this = $(this);
    var color = '#' + (function co(lor){   return (lor +=
    	[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random() * 10 + 6)])
  		&& (lor.length == 6) ?  lor : co(lor); })('');
    $this.css({'background': color});
  });
};
var loop = function(){

  setTimeout(function(){
    elem.each(function(){
      var $this = $(this);
      var height = (Math.random() * 40) + 1;
      $this.css({
        'bottom': height,
        'height': height,
        'width': '3px'
      });
    });
    loop();
  }, 1100);

}
setColor();
loop();

function apropos()
{
w=open('','topic','width=350,height=300');
w.document.write("1. Préambule <br /><br />Le présent document constitue un contrat entre vous et la société. Dans le cadre de ce contrat, nous serons désignés par les termes, « nous », « nos » ou « notre ». Vous serez désigné comme « Utilisateur », « vous », « vos » ou « votre ». \
L\'Utilisateur est une seule et unique personne physique. Ce contrat couvre votre utilisation du forum, sans distinction du moyen utilisé pour y accéder (que ce soit par exemple sur nos sites Internet, nos applications pour mobiles et tablettes, ou tout autre moyen actuel ou futur).\
En vous inscrivant sur le forum, vous devez avoir pris connaissance du présent contrat et l\'inscription vaut acceptation de l\'ensemble des dispositions du présent contrat.\
<br /><br />\
Nous ne fournissons aucune garantie quant au Service, autres que les garanties légales fournies dans le cadre de la législation applicable.\
<br /><br />\
\Le coût de l’utilisation de la technique de communication à distance utilisée est le coût normal facturé à l’Utilisateur par son fournisseur d’accès internet. Ce coût est entièrement supporté par l’Utilisateur.'");
w.document.close();
} 

function qui()
{
w=open('','topic','width=350,height=200');
w.document.write("Qui sommes nous? <br /><br /> Nous sommes 4 étudiants de Simplon, une Fabrique de Codeurs solidaires, qui ouvre ses portes a tous, sans distinctions de niveau d'études");
w.document.close();
} 

function faq()
{
w=open('','topic','width=350,height=200,resizable=no');
w.document.write("Notre F.A.Q est actuellement en cours de construction.");
w.document.close();
}


function tarif()
{
w=open('','topic','width=350,height=200,resizable=no');
w.document.write("1. Tarifs : <br /> Nos Tarifs sont indiqués à sur la pages de chaque produits. <br /><br />Livraison : <br />Le tarif de livraison est unique. Il s'élève à 3€ si le montant est inférieur a 30€ d'achat, et est gratuit si l'achat est supérieur ou égal a 30€. ");
w.document.close();
}

