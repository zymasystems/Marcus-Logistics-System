// Shared script for sidebar toggle, dark mode, simple manage requests UI
document.addEventListener("DOMContentLoaded", ()=>{

  // Dark mode: persist in localStorage
  const root = document.documentElement;
  const darkToggleBtns = document.querySelectorAll("[data-toggle-dark]");
  const applyTheme = (isDark)=>{
    if(isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("marcus_dark", isDark ? "1" : "0");
  };
  const saved = localStorage.getItem("marcus_dark");
  applyTheme(saved === "1");

  darkToggleBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const isDark = root.classList.toggle("dark");
      applyTheme(isDark);
    });
  });

  // Sidebar active link highlight (based on filename)
  const cur = window.location.pathname.split("/").pop();
  document.querySelectorAll(".side-link").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === cur || (href === "" && cur === "")) a.classList.add("active");
  });

  // Manage requests - client side demo actions
  // Delete / cancel / edit handlers using data attributes
  document.body.addEventListener("click", (e)=>{
    const el = e.target;
    // cancel
    if(el.matches("[data-cancel]") || el.closest("[data-cancel]")){
      const btn = el.closest("[data-cancel]");
      const id = btn.datasetCancel || btn.getAttribute("data-cancel");
      const row = document.querySelector(`tr[data-id="${id}"]`);
      if(!row) return;
      const statusCell = row.querySelector(".status-cell .badge");
      statusCell.textContent = "Cancelled";
      statusCell.className = "badge cancelled";
    }
    // complete
    if(el.matches("[data-complete]") || el.closest("[data-complete]")){
      const btn = el.closest("[data-complete]");
      const id = btn.datasetComplete || btn.getAttribute("data-complete");
      const row = document.querySelector(`tr[data-id="${id}"]`);
      if(!row) return;
      const statusCell = row.querySelector(".status-cell .badge");
      statusCell.textContent = "Completed";
      statusCell.className = "badge completed";
    }
    // edit - opens a simple prompt for demo
    if(el.matches("[data-edit]") || el.closest("[data-edit]")){
      const btn = el.closest("[data-edit]");
      const id = btn.datasetEdit || btn.getAttribute("data-edit");
      const row = document.querySelector(`tr[data-id="${id}"]`);
      if(!row) return;
      const info = row.querySelector(".req-info").textContent;
      const updated = prompt("Edit request info (demo):", info);
      if(updated !== null){
        row.querySelector(".req-info").textContent = updated;
      }
    }
  });

  // For forms: demo submission - prevents page reload and shows an alert/toast
  document.querySelectorAll("form[data-demo-submit]").forEach(form=>{
    form.addEventListener("submit", (ev)=>{
      ev.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      const orig = btn.textContent;
      btn.textContent = "Submitting...";
      setTimeout(()=>{
        btn.disabled = false;
        btn.textContent = orig;
        alert("Demo submission successful. In a real app this would be sent to the server.");
        form.reset();
      }, 900);
    });
  });

});
