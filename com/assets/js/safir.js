function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data.replace(/Safir Global DMCC/g, "SAFIR GROUP INTERNATIONAL LTD.");
    node.data = node.data.replace(/SAFIR GROUP INTERNATIONAL LTD../g, "SAFIR GROUP INTERNATIONAL LTD.");
    node.data = node.data.replace(/Fortune Tower 2703/g, "102 Aarti Chambers");
    node.data = node.data.replace(/Cluster CL-JLT/g, "Mont Fleuri, Victoria");
    node.data = node.data.replace(/Ver más/g, "Learn more");

node.data = node.data.replace(/In my opinion, SAFIR offers a unique product portfolio that is constantly expanding./g, "SAFIR offers a unique, forward-looking product portfolio that is constantly expanding.");
node.data = node.data.replace(/This gives every user the opportunity to get to know highly innovative products and services in the areas of blockchain tech, health tech and energy tech and to positively influence their own lives./g, "This gives every user the possibility to get to know highly innovative products and services in the areas of blockchain tech, health tech and energy tech and to positively influence their own lives.");
node.data = node.data.replace(/Especially in the field of recommendation marketing, this is not a matter of course./g, "On top of that, anyone who wants to recommend the products on offer will find an optimal foundation for this.");
node.data = node.data.replace(/Real products, real services and a company that does everything to establish a completely new level on the market./g, "The world is changing on all levels.");
node.data = node.data.replace(/I have never seen anything comparable!/g, "Those who do not want to close themselves off to this have found the perfect environment with SAFIR.");



  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}
function fixLinks(){
  const links = document.querySelectorAll('a');
  const links_filtered = [];
  for(let i = 0; i < links.length; i++){
    const a = links[i];
    const textContent = a.textContent;
    debugger;
    if(['Terms and conditions', 'Privacy Policy'].includes(textContent.trim())){
      debugger;
      links_filtered.push(a);
    }
  }
  for(const a of links_filtered){
    a.href = a.textContext === 'Terms and conditions' ? 'assets/files/website-terms-and-conditions-01-10-2022.pdf' : 'assets/files/website-privacy-policy-01-10-2022.pdf';
  }
}
function fixStrings(){
  walkText(document.body);
  fixLinks();

}
fixStrings();

