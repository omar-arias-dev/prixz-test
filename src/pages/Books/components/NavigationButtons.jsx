export default function NavigationButtons({ onPageChange, page, data }) {
  return (
    <div class="flex items-center gap-8">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(-1)}
        class="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
        </svg>
      </button>

      <p class="text-slate-600">
        Page <strong class="text-slate-800">{page}</strong>
      </p>

      <button
        type="button"
        disabled={
          data?.length < 10
        }
        onClick={() => onPageChange(1)}
        class="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  );
}