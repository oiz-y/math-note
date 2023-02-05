import Latex from 'react-latex';
import Link from '@mui/material/Link';

import { DefinitionTemplate } from './Definition';
import { TheoremTemplate } from './Theorem';
import { ProofTemplate } from './Proof';
import { SupplementTemplate } from './Supplement';
import { OutlineTemplate } from './Outline';

const flowStyle = {
  textAlign: 'left',
  padding: '2.5px',
}

const titleStyle = {
  fontSize: '40px',
}

export const Flow = () => {
  const outlineTitle = <>～無限次ガロア理論を学ぶには～</>;
  const outlineSentence =
    <>
      <Latex>
        有限次ガロア理論では、ガロア拡大 $L/K$ の中間体と、そのガロア群 $\rm Gal$$(L/K)$ の部分群との
        1対1の対応が成り立つ、というものでした。
        無限次ガロア理論では、ガロア拡大 $L/K$ の中間体と、そのガロア群 $\rm Gal$$(L/K)$ の ”閉” 部分群との
        1対1の対応が成り立つ、というものです。
        この「閉」というのは、位相空間の閉集合のことを意味します。
        つまり、無限次ガロア理論ではガロア群に位相を入れるのです。
        そのため、位相群についての基本知識を学ぶ必要があります。
        ここでは位相群の基礎についてやさしく解説していきます。
        $\\$
        位相群を考えるために、以下の例を考えてみます。
        例えば、
      </Latex>
      <Latex displayMode={true}>
        $$
        \mathbb Z / 3 \mathbb Z =
        \lbrace \ \overline 0, \ \overline 1, \ \overline 2 \ \rbrace
        $$
      </Latex>
      <Latex>
        に、離散位相を入れてみます。
        こうしてできた位相空間に対して、群の演算と逆元操作を考えます。
      </Latex>
      <Latex displayMode={true}>
        $$
        \phi : \mathbb Z / 3 \mathbb Z \times \mathbb Z / 3 \mathbb Z \to \mathbb Z / 3 \mathbb Z, \
        (\overline a, \overline b) \mapsto \overline a + \overline b
        \\
        \psi : \mathbb Z / 3 \mathbb Z \to \mathbb Z / 3 \mathbb Z, \
        \overline a \mapsto - \overline a
        $$
      </Latex>
      <Latex>
        これらの写像が連続となるとき、$\mathbb Z/3 \mathbb Z$ は位相群として考えることができます。
      </Latex>
    </>;
  const definitionHeadline = <>定義 1</>;
  const t = '$a^{-1}$';
  const definitionSentence =
    <>
      <Latex>
        集合 $G$ が位相群であるとは、$G$ が次の条件を満たすことをいう：
        $\\$
        (1) $G$ は群である。$\\$
        (2) $G$ は位相空間である。$\\$
        (3) 次の2つの写像は連続である。$\\$
      </Latex>
      <div style={{ textAlign: 'center' }}>
        <Latex displayMode={false}>
          $\
          \\
          \phi : G \times G \to G, \
          (a, b) \mapsto a \circ b
          \\
          \psi : G \to G, \ a \mapsto \
          $
        </Latex>
        <Latex>{t}</Latex>
      </div>
    </>;
  const theoremHeadline = <>定理 1</>;
  const theoremSentence =
    <Latex>
      位相群 $G$ の部分群 $H$ は位相群である. さらに $H$ が開集合ならば, $H$ は閉集合である.
    </Latex>;
  const proofSentence =
    <Latex>
      群 $G$ に定義された演算は $H$ に制限しても連続である。
      また、逆元をとる操作も $H$ に制限しても連続である。
      よって $H$ も位相群である。
      次に $G$ において $H$ が開集合であるとする。
      このとき、 $\overline H = H$ であることを示す（$\overline H$ は $H$ の閉包を表す）。
      任意の $a \in \overline H$ をとる。
      $$f_a: G \to G, g \mapsto ag$$ は同相写像である。
      よって $aH$ は $a$ の開集合である。
      ゆえに $H \cap aH \neq \emptyset$ である（※）。
      したがって $a \in H$ となる。$\Box$
    </Latex>;
  const supplementSentence =
    <>
      <Latex>
        【（※） について】
      </Latex>
      <Link href="https://math.jp/wiki/%E4%BD%8D%E7%9B%B8%E7%A9%BA%E9%96%93%E8%AB%964%EF%BC%9A%E9%96%89%E5%8C%85%E3%81%A8%E5%86%85%E9%83%A8">
        位相空間論4：閉包と内部
      </Link>
      の「命題 4.5 (閉包に属する点の特徴づけ)」を参照。
    </>

  return (
    <>
      <div style={titleStyle}>
        位相群の基礎
      </div>
      <div style={flowStyle}>
        <OutlineTemplate
          outlineTitle={outlineTitle}
          sentence={outlineSentence}
        />
        <DefinitionTemplate
          headline={definitionHeadline}
          sentence={definitionSentence}
        />
        <TheoremTemplate
          headline={theoremHeadline}
          sentence={theoremSentence}
        />
        <ProofTemplate
          sentence={proofSentence}
        />
        <SupplementTemplate
          sentence={supplementSentence}
        />
      </div>
    </>

  );
}
