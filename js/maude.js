// Disable the auto detection
hljs.configure({languages: []});

// Register Maude as a language
hljs.registerLanguage("maude", function(hljs) {
  return {
    keywords: 'fmod endfm'
  };
});
