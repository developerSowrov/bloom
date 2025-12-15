// import swc from "next/dist/compiled/@swc/core"
// import { transformSync
//  } from "next/dist/build/swc/generated-native"
import { transformSync } from '@swc/core';
import { parseSync } from '@swc/core';
import HeroContent from "../../components/HeroSection/HeroContent"


export async function GET() {


//   const { code } = await request.json();
    const codeString = HeroContent.toString();
    const output = transformSync(codeString, {
        jsc: {
        parser: {
            syntax: 'typescript',
            tsx: true,
        },
        target: 'es2020',
        },
    });

    const ast = parseSync(codeString, {
                                            syntax: 'typescript',
                                            tsx: true,
                                        });

    // function to traverse AST and extract all className strings
    function getClassNames(node, classNames = new Set()) {
    if (!node) return classNames;

    if (node.type === 'JSXAttribute' && node.name?.name === 'className') {
        if (node.value?.type === 'StringLiteral') {
        node.value.value.split(' ').forEach((cls) => classNames.add(cls));
        }
    }

    for (let key in node) {
        if (typeof node[key] === 'object' && node[key] !== null) {
        if (Array.isArray(node[key])) {
            node[key].forEach((child) => getClassNames(child, classNames));
        } else {
            getClassNames(node[key], classNames);
        }
        }
    }

    return classNames;
    }

    const classesUsed = Array.from(getClassNames(ast));
    console.log(classesUsed);

  

//   console.log(output)
  return Response.json({ code: ast });
}