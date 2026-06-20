// identity_simulation.js

function verifyIdentity(iterations = 1000000) {
    console.log(`【数値的検証】${iterations}回のランダムテストを開始します...`);
    
    let successCount = 0;
    const EPSILON = 1e-12; // 浮動小数点数の誤差を許容するための微小値

    for (let i = 0; i < iterations; i++) {
        // ランダムな実数（ラジアン）を生成
        const x = Math.random() * Math.PI * 2;

        // 左辺: sin^2(x) + cos^2(x)
        const leftSide = Math.pow(Math.sin(x), 2) + Math.pow(Math.cos(x), 2);
        // 右辺
        const rightSide = 1;

        // 浮動小数点の計算誤差を考慮して比較
        if (Math.abs(leftSide - rightSide) < EPSILON) {
            successCount++;
        }
    }

    const successRate = (successCount / iterations) * 100;
    console.log(`結果: ${successCount} / ${iterations} 回一致`);
    console.log(`成功率: ${successRate}%`);
    
    if (successRate === 100) {
        console.log("👉 全てのテストで恒等式が成り立ちました（数値的証明）。");
    }
}

verifyIdentity();