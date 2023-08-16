extra file
// class Solution {
//  public:
//   string reverseVowels(string s) {
//     int l = 0;
//     int r = s.length() - 1;

//     while (l < r) {
//       while (l < r && !isVowel(s[l]))
//         ++l;
//       while (l < r && !isVowel(s[r]))
//         --r;
//       swap(s[l++], s[r--]);
//     }

//     return s;
//   }

//  private:
//   bool isVowel(char c) {
//     static constexpr string_view kVowels = "aeiouAEIOU";
//     return kVowels.find(c) != string_view::npos;
//   }
// };

// // 
// class Solution {
//   public:
//    bool wordPattern(string pattern, string str) {
//      const int n = pattern.length();
//      istringstream iss(str);
//      vector<int> charToIndex(128);
//      unordered_map<string, int> stringToIndex;
 
//      int i = 0;
//      for (string word; iss >> word; ++i) {
//        if (i == n)  // Out of bound
//          return false;
//        if (charToIndex[pattern[i]] != stringToIndex[word])
//          return false;
//        charToIndex[pattern[i]] = i + 1;
//        stringToIndex[word] = i + 1;
//      }
 
//      return i == n;
//    }
//  };
 