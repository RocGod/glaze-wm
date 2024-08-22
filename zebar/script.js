export function focusWorkspace(event, context) {
  try {
    console.log('Focus button clicked!', { event, context });
    
    const { id } = event.target;
    const { glazewm } = context.providers;

    if (glazewm && typeof glazewm.focusWorkspace === 'function') {
      glazewm.focusWorkspace(id);
    } else {
      console.error('glazewm provider or focusWorkspace function not found');
    }
  } catch (error) {
    console.error('Error focusing workspace:', error);
  }
}