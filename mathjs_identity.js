// mathjs_identity.js
const { simplify, parse } = require('mathjs');

function analyzeIdentity() {
    console.log("【代数的検証】mathjsを使用した数式簡約化を行います。");

    // 検証する恒等式: (x + y)^2 = x^2 + 2xy + y^2
    const leftSideExpr = "(x + y)^2";
    const rightSideExpr = "x^2 + 2*x*y + y^2";

    // 左辺を展開・簡約化
    const simplifiedLeft = simplify(leftSideExpr).toString();
    // 右辺を簡約化
    const simplifiedRight = simplify(rightSideExpr).toString();

    console.log(`元の左辺: ${leftSideExpr}`);
    console.log(`元の右辺: ${rightSideExpr}`);
    console.log('------------------------------------');
    console.log(`簡約化された左辺: ${simplifiedLeft}`);
    console.log(`簡約化された右辺: ${simplifiedRight}`);

    // 文字列、または抽象構文木(AST)の比較
    if (simplifiedLeft === simplifiedRight) {
        console.log("\n👉 左辺と右辺が代数的に完全に一致しました。恒等式です。");
    } else {
        console.log("\n❌ 一致しませんでした。恒等式ではないか、簡約化の限界です。");
    }
}

analyzeIdentity();