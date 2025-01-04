// script.js

// 画像のリストを配列として定義
const images = [
    

'img/egg.png',
'img/human.png',
'img/earth.png',
'img/sun.png',
'img/Heart.png',
'img/pikapika.png',
'img/earth.png',
'img/clock.png',
'img/book.png',
'img/donut.png',
'img/supplement.png',
'img/pizza.png',
'img/niko.png',
'img/phone.png',
'img/koppu.png',
'img/kasa.png',
'img/chou.png',
'img/kagami.png',
'img/bandage.png',
'img/aura.png',






    
  ];
  
  // ランダムに2枚の画像を選んで表示する関数
  function displayRandomImages() {
    const usedIndices = new Set();
  
    // ランダムなインデックスを生成
    while (usedIndices.size < 2) {
      const randomIndex = Math.floor(Math.random() * images.length);
      usedIndices.add(randomIndex);
    }
  
    // 画像要素を取得して、ランダムな画像を設定
    const [index1, index2] = [...usedIndices];
    document.getElementById('image1').src = images[index1];
    document.getElementById('image2').src = images[index2];
  }
  function saveData() {
    const tondemology = document.getElementById('tondemology-input').value;
    const image1Src = document.getElementById('image1').src;
    const image2Src = document.getElementById('image2').src;
  
    // 現在のローカルストレージのアーカイブを取得
    let archive = JSON.parse(localStorage.getItem('archive')) || [];
  
    // 新しいエントリーを作成
    const newEntry = {
      tondemology: tondemology,
      image1: image1Src,
      image2: image2Src,
      date: new Date().toISOString() // 日付を追加（オプション）
    };
  
    // 新しいエントリーをアーカイブに追加
    archive.push(newEntry);
  
    // 更新されたアーカイブを localStorage に保存
    localStorage.setItem('archive', JSON.stringify(archive));
  
    // 入力フィールドをクリア
    document.getElementById('tondemology-input').value = "";
  
    // 画像を新しいランダムなものに更新
    displayRandomImages();
  }

  // ページが読み込まれたときに画像を表示
  window.onload = displayRandomImages;
  
  