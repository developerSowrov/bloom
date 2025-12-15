export default function FontTestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        
        {/* Header */}
        <div className="border-b pb-6">
          <h1 className="text-4xl font-bold">Font Debug Test Page</h1>
          <p className="mt-2 text-gray-600">
            Open DevTools → Network tab → Filter by "font" to verify font files are loading
          </p>
        </div>

        {/* Satoshi Font Tests */}
        <section className="space-y-4 rounded-lg border border-gray-200 bg-grey-50 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Satoshi Font (Variable)</h2>
          <div className="space-y-3">
            <p className="font-satoshi font-thin text-lg">
              <strong>Weight 100 (Thin):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-extralight text-lg">
              <strong>Weight 200 (ExtraLight):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-light text-lg">
              <strong>Weight 300 (Light):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-normal text-lg">
              <strong>Weight 400 (Normal):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-medium text-lg">
              <strong>Weight 500 (Medium):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-semibold text-lg">
              <strong>Weight 600 (SemiBold):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-bold text-lg">
              <strong>Weight 700 (Bold):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-extrabold text-lg">
              <strong>Weight 800 (ExtraBold):</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-satoshi font-black text-lg">
              <strong>Weight 900 (Black):</strong> The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </section>

        {/* Integral CF Font Tests */}
        <section className="space-y-4 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Integral CF Font (Bold Only)</h2>
          <div className="space-y-3">
            <p className="font-integralCF text-lg uppercase">
              <strong>Default:</strong> The quick brown fox jumps over the lazy dog
            </p>
            <p className="font-integralCF text-2xl uppercase">
              <strong>Size 2xl:</strong> The quick brown fox
            </p>
            <p className="font-integralCF text-3xl uppercase">
              <strong>Size 3xl:</strong> XSHOP Logo Style
            </p>
            <p className="font-integralCF text-4xl uppercase">
              <strong>Size 4xl:</strong> Big Heading
            </p>
          </div>
        </section>

        {/* Mixed Usage */}
        <section className="space-y-4 rounded-lg border border-green-200 bg-green-50 p-6">
          <h2 className="font-integralCF text-3xl uppercase">Product Card Example</h2>
          <div className="font-satoshi space-y-2">
            <h3 className="font-integralCF text-xl uppercase">Wireless Headphones</h3>
            <p className="font-light text-gray-600">
              Premium noise-cancelling headphones with 30-hour battery life
            </p>
            <p className="text-2xl font-bold">$299.99</p>
            <button className="font-integralCF rounded bg-black px-6 py-2 uppercase text-white">
              Add to Cart
            </button>
          </div>
        </section>

        {/* DevTools Instructions */}
        <section className="space-y-4 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Debug Instructions</h2>
          <ol className="list-decimal space-y-2 pl-6 font-satoshi">
            <li>
              <strong>Check Network Tab:</strong>
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>Open DevTools (F12 or Cmd+Option+I)</li>
                <li>Go to Network tab</li>
                <li>Filter by "font" or search for ".ttf" and ".woff"</li>
                <li>Reload page - you should see:
                  <ul className="mt-1 list-disc space-y-1 pl-6">
                    <li><code className="bg-gray-200 px-1">Satoshi-Variable.ttf</code> (Status: 200)</li>
                    <li><code className="bg-gray-200 px-1">IntegralCF-Bold.woff</code> (Status: 200)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Inspect Element:</strong>
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>Right-click any text above</li>
                <li>Choose "Inspect"</li>
                <li>In Computed tab, check "font-family"</li>
                <li>Should show "Satoshi" or "Integral CF"</li>
              </ul>
            </li>
            <li>
              <strong>Check Console:</strong>
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>Look for any 404 errors for font files</li>
                <li>No errors = fonts are loading correctly</li>
              </ul>
            </li>
            <li>
              <strong>Visual Test:</strong>
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>Satoshi weights should look visually different (thin to black)</li>
                <li>Integral CF should appear bold and display-style</li>
                <li>If all text looks the same, fonts aren't loading</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Raw CSS Test */}
        <section className="space-y-4 rounded-lg border border-purple-200 bg-purple-50 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Raw CSS Font Test</h2>
          <div className="space-y-3">
            <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
              Direct CSS: Satoshi Normal (400)
            </p>
            <p style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}>
              Direct CSS: Satoshi Bold (700)
            </p>
            <p style={{ fontFamily: 'Integral CF, sans-serif', fontWeight: 700 }}>
              Direct CSS: INTEGRAL CF BOLD
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
