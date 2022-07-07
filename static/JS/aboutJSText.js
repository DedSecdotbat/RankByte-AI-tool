const headlines = document.querySelectorAll('.title');
headlines.forEach(hl => {
  let newHtml = '';
  for (let i = 0; i < hl.innerHTML.length; i += 1) {
    let ts = hl.innerHTML[i];
    if (ts === '<') {
      const tmpTxt = hl.innerHTML.substring(i);
      ts = tmpTxt.match(/<.*?>/)[0];
      i += ts.length - 1;
    }
    else if (ts === ' ') ts = ' ';
    else ts = `<span style="opacity: 0; display: inline-block;">${ts}</span>`;
    newHtml += ts;
  }
  hl.innerHTML = newHtml;  
  hl.ltrs = hl.querySelectorAll('span');
  const delSpans = () => hl.innerHTML = hl.innerHTML.replace(/<span.*?>/g, '');
  gsap.timeline({ scrollTrigger: { trigger: hl, start: 'top 80%'}, onComplete: delSpans })
    .set(hl.ltrs, { opacity: 0, x: 40, skewX: -40 })
    .to(hl.ltrs, 0.6, { opacity: 1, x: 0, ease: 'back.out', skewX: 0, stagger: 0.02 })
});