function Banner() {
  return (
    <section className="bg-[#61BB61] py-8 text-white shadow-[inset_0_8px_8px_-8px_rgba(0,0,0,0.3),inset_0_-8px_8px_-8px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="inline-block border-b border-white/80 pb-1 text-5xl font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
          Realworld Blog
        </h1>
        <p className="pl-5 text-2xl font-light text-white">A place to share your knowledge.</p>
      </div>
    </section>
  );
}
export default Banner;
