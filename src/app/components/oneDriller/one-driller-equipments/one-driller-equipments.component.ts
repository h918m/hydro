import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-driller-equipments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
      <div class="bg-white p-4 rounded-lg">
        <p class="text-center font-bold text-[25px] text-[#0CB9DE] my-2">
          {{ equipments[activeEquip].title }}
        </p>
        <div class="grid grid-cols-4 gap-2">
          <div
            class="bg-white "
            *ngFor="let img of equipments[activeEquip].images"
          >
            <img [src]="img" class="w-full" />
          </div>
        </div>
        <p class="text-[#121212] text-[20px]">
          <span class="text-[24px] font-bold">Status</span>
          {{ equipments[activeEquip].status }}
        </p>
        <p class="text-[#121212]">
          <span class="text-[24px] font-bold">Description</span>
        </p>
        <p class="text-[#121212] ">{{ equipments[activeEquip].description }}</p>
      </div>
      <div>
        <div
          class="bg-white p-4 rounded-lg flex flex-col sm:flex-row items-center gap-3"
        >
          <div class="w-full sm:w-[60%]">
            <p class="text-[#121212]">LSWRC Ratinig</p>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/icons/onBoarding.svg" alt="" />
              <p>Onboarding</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/icons/responsiveness.svg" alt="" />
              <p>Responsiveness</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/icons/communication.svg" alt="" />
              <p>Communication</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/icons/tenant.svg" alt="" />
              <p>Tenant Experience</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
            <div class="flex gap-2 items-center">
              <img src="../../../assets/icons/landlord.svg" alt="" />
              <p>Landlord Experience</p>
              <div class="relative w-[100px] bg-gray-100 h-2 rounded-full">
                <div
                  class="absolute top-0 left-0 bg-[#0CB9DE] w-[85%] h-full rounded-full"
                ></div>
              </div>
              <p>8.5</p>
            </div>
          </div>
          <div class="w-[40%]">
            <p class="text-base font-bold mb-3 text-center">Social Profiles</p>
            <div class="flex gap-4 justify-center">
              <a href="">
                <img
                  src="../../../assets/icons/twitterBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/icons/whatsappBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/icons/linkedInBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/icons/facebookBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
              <a href="">
                <img
                  src="../../../assets/icons/instargramBlue.svg"
                  alt=""
                  class="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg mt-4">
          <p class="font-bold">Equipments’ List</p>

          <div
            class="flex  flex-col sm:flex-row justify-center gap-4 sm:gap-10 items-center"
          >
            <div class=" p-3 text-center">
              <div class="flex gap-2  justify-center items-center">
                <p class="text-[#0CB9DE] text-6xl font-bold">5</p>
                <div class="text-[#121212]">
                  <p class="font-bold">Excellent</p>
                  <p class="text-xs">158 reveiws</p>
                </div>
              </div>
              <div class="flex gap-2 justify-center items-center">
                <img
                  src="../../../assets/icons/star.svg"
                  alt=""
                  class="w-5 h-5"
                />
                <img
                  src="../../../assets/icons/star.svg"
                  alt=""
                  class="w-5 h-5"
                />
                <img
                  src="../../../assets/icons/star.svg"
                  alt=""
                  class="w-5 h-5"
                />
                <img
                  src="../../../assets/icons/star.svg"
                  alt=""
                  class="w-5 h-5"
                />
                <img
                  src="../../../assets/icons/star.svg"
                  alt=""
                  class="w-5 h-5"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center gap-2 my-1">
                <p class="text-[#596574] text-sm">Agent rating</p>
                <div class="flex gap-2">
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                </div>
              </div>
              <div class="flex items-center gap-2 my-1">
                <p class="text-[#596574] text-sm">Landlord rating</p>
                <div class="flex gap-2">
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                </div>
              </div>
              <div class="flex items-center gap-2 my-1">
                <p class="text-[#596574] text-sm">Location rating</p>
                <div class="flex gap-2">
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                  <img
                    src="../../../assets/icons/star.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-1 bg-[#148A92] rounded-full"></div>
          <div class="mt-4">
            <div class="text-[#148A92] text-lg font-bold flex ">
              <p>Reviews</p>
              <sup class="text-xs">(54)</sup>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class OneDrillerEquipmentsComponent {
  activeEquip = 0;
  equipments = [
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM Mouted -Truck Coring Drill Rig',
      ticked: true,
      images: [
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
      ],
      status: 'Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
    {
      title: 'APCOM rotary water well drill',
      ticked: false,
      images: [
        '../../../assets/images/equip3.png',
        '../../../assets/images/equip4.png',
        '../../../assets/images/equip1.png',
        '../../../assets/images/equip2.png',
      ],
      status: 'Non Functional',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,tenetur accusantium dignissimos id eos nemo eaque praesentiumdeserunt, nihil voluptas, laborum dolorem quo animi asperiores nobiscorporis ipsam pariatur mollitia. Nihil, soluta? Ullam tenetur essenulla odio temporibus, adipisci consequatur ratione ducimus quisquam anostrum officiis animi, dignissimos error delectus quibusdamrepellendus tempore commodi aliquid porro nesciunt possimus,exercitationem officia? Esse quibusdam quia distinctio, aliquid optio',
    },
  ];
  goToEquip(index: number) {
    this.activeEquip = index;
  }
}
