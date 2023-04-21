import React from 'react'

function Nyheter() {
  return (
    <div  className="container mx-auto">
      <div className="border-b-2 border-t-2">
           <div className="mb-4 pt-2 pb-2">
               <h2 className="pt-2 pl-8 text-white">
               &nbsp;Det finns 3 nyheter
               </h2>
           </div>
      </div>
      <div className="w-4/4 bg-gray-600">
         <div className="pl-8 pr-6 pb-6 pt-6">
           <table className="table-fixed">
              <thead>
                <tr className="bg-black text-white">
                  <th className="w-12/12 px-4 py-2 text-left">Nyhet nummer 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white">
                      <td className="px-4 py-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus, nibh a laoreet vehicula, dolor arcu efficitur odio, et ultricies metus sapien eu nibh. Suspendisse in purus ante. Nullam purus leo, pharetra vel congue vitae, bibendum in diam. Nulla facilisi. Vestibulum nisl urna, efficitur eget bibendum quis, elementum id nisi. Phasellus imperdiet arcu purus, scelerisque imperdiet ante tempus non. Sed porta ligula id dui mattis, ac finibus magna pellentesque. In sagittis erat ante, ut posuere felis fermentum at.</td>
                </tr>
              </tbody>
            </table>
            <table className="table-fixed">
              <thead>
                <tr className="bg-black text-white">
                  <th className="w-1/12 px-4 py-2 text-left">Nyhet nummer 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white">
                      <td className="px-4 py-2 pb-4">Aenean finibus urna a risus semper ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sed nibh sit amet arcu maximus efficitur porta id tortor. Maecenas in nunc eget ipsum interdum sagittis. Curabitur posuere lacus eros, finibus porta metus lacinia vitae. Morbi ultrices lectus eu nulla auctor dapibus. In bibendum vel neque id dignissim. Cras consequat magna maximus dui commodo condimentum. Etiam eu mi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at ullamcorper velit, quis ultrices neque. Praesent risus mi, bibendum a congue eu, pulvinar eget libero. Quisque id ipsum quis enim efficitur scelerisque quis facilisis magna. Nullam vitae interdum leo.</td>
                </tr>
              </tbody>
            </table>
            <table className="table-fixed">
              <thead>
                <tr className="bg-black text-white">
                  <th className="w-1/12 px-4 py-2 text-left">Nyhet nummer 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white">
                      <td className="px-4 py-2 pb-4">Aliquam feugiat felis vitae turpis viverra vulputate. Maecenas egestas id nunc maximus mattis. Nunc at imperdiet nisl, ut malesuada ipsum. Nam ornare mauris eros, in viverra diam viverra id. Nulla ultrices porta elit, at aliquet justo accumsan ac. In quis gravida ligula. In eu erat augue. Nulla vestibulum, nulla et volutpat rutrum, nulla lectus gravida purus, et varius elit nunc quis sem. Maecenas sit amet ornare lorem, nec feugiat magna. Aliquam sit amet elementum tellus, ut malesuada quam. Donec semper odio at nibh ornare aliquam. Curabitur finibus justo justo, vel posuere enim consequat eget.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Nyheter;
