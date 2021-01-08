'use strict'

{
  const btn = document.getElementById('btn');
  const text = document.getElementById(`text`);

  btn.addEventListener('click', () => {
    const results = [`二十世紀`,`あきづき`,`ほうすい`,`こうすい`]
    const results2 = [
      `味は甘みが強く、果肉の食感は柔らかいのが二十世紀梨です。`,
      `味は甘みが強く、果肉は柔らかいのが特徴です。糖度が高くて酸味が少ない、`,
      `食感はやや柔らかめ。二十世紀と似たような口当たりですが、それよりも洋梨っぽさがあると思えばよいでしょう。`,
      `味は甘みが強く梨独特の香りも強い。`,
    ]
    const n = Math.floor(Math.random() * results.length );
    btn.textContent = results[n];
    text.textContent = results2[n];
  });
}