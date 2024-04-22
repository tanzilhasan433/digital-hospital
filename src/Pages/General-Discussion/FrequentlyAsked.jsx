/* eslint-disable react/no-unescaped-entities */

const FrequentlyAsked = () => {
    return (
       <div className="bg-[#6F2A6D]">

        <div className="text-center pt-12">
        <h2 className="text-3xl  mx-auto  font-bold text-white border-b-2 border-white inline">সাধারণ জিজ্ঞাসা</h2>
        </div>
        
         <div className="p-12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  mb-6 items-center gap-20 justify-center">
            <div className="join join-vertical w-full text-white">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    বন্ধ্যাত্ব কি?
    </div>
    <div className="collapse-content"> 
      <p>বিশ্ব স্বাস্থ্য সংস্থার মতে, বন্ধ্যাত্ব হল "প্রজনন ব্যবস্থার একটি রোগ যা 12 মাস বা তার বেশি নিয়মিত অরক্ষিত যৌন মিলনের পরে একটি ক্লিনিকাল গর্ভাবস্থা অর্জনে ব্যর্থতার দ্বারা সংজ্ঞায়িত করা হয়"।</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    ব্লাস্টোসিস্ট কি সবার জন্য উপযুক্ত?
    </div>
    <div className="collapse-content"> 
      <p> ব্লাস্টোসিস্ট সংস্কৃতি সবার জন্য উপযুক্ত নয়। যদি নিষিক্তকরণের জন্য কম সংখ্যক oocytes পুনরুদ্ধার করা হয় যার ফলে কম ভ্রূণ হয়, তবে তাদের ব্লাস্টোসিস্ট পর্যায়ে না বেড়ে যাওয়ার ঝুঁকি থাকে।</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    IUI এর পূর্ণরূপ কি?
    </div>
    <div className="collapse-content"> 
      <p>IUI হল "Intrauterine Insemination" এর সংক্ষিপ্ত রূপ - একটি প্রক্রিয়া যা সরাসরি জরায়ুতে ধোয়া এবং ঘনীভূত শুক্রাণু প্রবেশ করানো হয় যাতে নিষিক্তকরণে সহায়তা করা হয়।</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    IUI এর ঝুঁকি কি কি?
    </div>
    <div className="collapse-content"> 
      <p>IUI একটি ন্যূনতম আক্রমণাত্মক এবং নিরাপদ পদ্ধতি। কিছু মহিলা গর্ভধারণের পরে মাসিকের ক্র্যাম্পের মতো হালকা ক্র্যাম্প অনুভব করতে পারে। উদ্দীপিত IUI চক্রের ক্ষেত্রে, ডিম্বাশয়ের হাইপারস্টিমুলেশন (হরমোন থেরাপি থেকে একটি বিরল কিন্তু বিপজ্জনক জটিলতা) এবং একাধিক গর্ভধারণের ঝুঁকি রয়েছে।</p>
    </div>
  </div>
  
</div>

        <img className="lg:ml-32" src="https://i0.wp.com/iswaryafertility.com/wp-content/uploads/2023/06/dr-ex.webp?w=297&ssl=1" alt="" />
        </div>
       </div>
    );
};

export default FrequentlyAsked;